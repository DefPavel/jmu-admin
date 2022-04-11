import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGetSession = createAsyncThunk(
    'sessions/get',
    async (payload, thunkApi) => {
        try {
            const response = await axios.get('/api/get_session', payload);
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
        sessions: [],
    },
    extraReducers: {

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
        }
    }
});



export default sesionsReducer.reducer;