import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGetSession = createAsyncThunk(
    'sessions/get',
    async (payload, thunkApi) => {
        try {
            const currentPage = payload?.currentPage;
            const response = await axios.get('/api/get_session', {
                params: {
                    currentPage,
                },
                payload
            });
            return response.data;
        } 
        catch (error) {
            return thunkApi.rejectWithValue(error?.response?.data || 'Произошла непредвиденная ошибка')
        }
    }
);
export const fetchDeleteSession = createAsyncThunk(
    'sessions/delete',
    async (payload, thunkApi) => {
        try {
            const response = await axios.post('/api/remove_session', payload);
            return response.data;
        } 
        catch (error) {
            return thunkApi.rejectWithValue(error?.response?.data || 'Произошла непредвиденная ошибка')
        }
    }
);

const sesionsReducer = createSlice({
    name: 'sessions',
    initialState: {
        isLoading: false,
        error: '',
        sessions: {},
    },
    extraReducers: {

        //--------------------------------------//
        // Загрузка
        [fetchGetSession.pending]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        // В случае успеха
        [fetchGetSession.fulfilled]: (state ,action) => {
            state.isLoading = false;
            state.error = '';
            state.sessions = action.payload;
        },
        // В случае ошибки
        [fetchGetSession.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        //--------------------------------------//
        // Загрузка
        [fetchDeleteSession.pending]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        // В случае успеха
        [fetchDeleteSession.fulfilled]: (state ,action) => {
            state.isLoading = false;
            state.error = '';
            state.sessions = action.payload;
        },
        // В случае ошибки
        [fetchDeleteSession.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },


    }
});



export default sesionsReducer.reducer;