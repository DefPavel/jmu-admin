import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchGetUsers = createAsyncThunk(
    'users/get',
    async (payload, thunkApi) => {
        try {
            //const currentPage = payload?.currentPage;
            const response = await axios.get('/api/users/all', payload);
            return response.data;
        } 
        catch (error) {
            return thunkApi.rejectWithValue(error?.response?.data || 'Произошла непредвиденная ошибка')
        }
    }
);
export const fetchDeleteUsers = createAsyncThunk(
    'users/delete',
    async (payload, thunkApi) => {
        try {
            //const currentPage = payload?.currentPage;
            const response = await axios.post('/api/users/delete', payload);
            return response.data;
        } 
        catch (error) {
            return thunkApi.rejectWithValue(error?.response?.data || 'Произошла непредвиденная ошибка')
        }
    }
);
export const fetchNewUsers = createAsyncThunk(
    'users/new',
    async (payload, thunkApi) => {
        try {
            //const currentPage = payload?.currentPage;
            const response = await axios.post('/api/users/new', payload);
            return response.data;
        } 
        catch (error) {
            return thunkApi.rejectWithValue(error?.response?.data || 'Произошла непредвиденная ошибка')
        }
    }
);

const usersReducer = createSlice({
    name: 'users',
    initialState: {
        isLoading: false,
        error: '',
        users: [],
    },
    extraReducers: {
        // --------------GET-------------------- //
        // Загрузка
        [fetchGetUsers.pending]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        // В случае успеха
        [fetchGetUsers.fulfilled]: (state ,action) => {
            state.isLoading = false;
            state.error = '';
            state.users = action.payload;
        },
        // В случае ошибки
        [fetchGetUsers.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        // --------------DELETE-------------------- //
        // Загрузка
        [fetchDeleteUsers.pending]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        // В случае успеха
        [fetchDeleteUsers.fulfilled]: (state ,action) => {
            state.isLoading = false;
            state.error = '';
        },
        // В случае ошибки
        [fetchDeleteUsers.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }

    }
});

export default usersReducer.reducer;

