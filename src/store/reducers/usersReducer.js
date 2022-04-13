import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGetOrganizations = createAsyncThunk(
    'users/company/get',
    async (payload, thunkApi) => {
        try {
            const currentPage = payload?.currentPage;
            const response = await axios.get('/api/organizations/all', 
            {
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
export const fetchGetAuthGroups = createAsyncThunk(
    'users/auth_groups/get',
    async (payload, thunkApi) => {
        try {
            //const currentPage = payload?.currentPage;
            const response = await axios.get('/api/auth_groups/all', {
                params:{
                    id_org: payload
                }
            });
            return response.data;
        } 
        catch (error) {
            return thunkApi.rejectWithValue(error?.response?.data || 'Произошла непредвиденная ошибка')
        }
    }
);

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
    'users/add',
    async (payload, thunkApi) => {
        try {
            //const currentPage = payload?.currentPage;
            const response = await axios.post('/api/users/add', payload);
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
        authGroups:[],
        company:{},
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
        // --------------INSERT-------------------- //
        // Загрузка
        [fetchNewUsers.pending]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        // В случае успеха
        [fetchNewUsers.fulfilled]: (state ,action) => {
            state.isLoading = false;
            state.error = '';
        },
        // В случае ошибки
        [fetchNewUsers.rejected]: (state, action) => {
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
        },
        // -----------Company---------------------
        // Загрузка
        [fetchGetOrganizations.pending]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        // В случае успеха
        [fetchGetOrganizations.fulfilled]: (state ,action) => {
            state.isLoading = false;
            state.error = '';
            state.company = action.payload
        },
        // В случае ошибки
        [fetchGetOrganizations.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
         // -----------AuthGroups---------------------
        // Загрузка
        [fetchGetAuthGroups.pending]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        // В случае успеха
        [fetchGetAuthGroups.fulfilled]: (state ,action) => {
            state.isLoading = false;
            state.error = '';
            state.authGroups = action.payload
        },
        // В случае ошибки
        [fetchGetAuthGroups.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },

    }
});

export default usersReducer.reducer;

