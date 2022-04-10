import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import Cookies from 'universal-cookie/es6';
import axios from 'axios';
const cookies = new Cookies();

export const fetchAuth = createAsyncThunk(
    'auth/signIn',
    async (payload, thunkApi) => {
        try {
            const response = await axios.post('/api/auth', payload);
            cookies.set('auth-token', response.data.auth_token);
            return response.data;
        } 
        catch (error) {
            return thunkApi.rejectWithValue(error?.response?.data || 'Произошла непредвиденная ошибка')
        }
    }
);

const authReducer = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        error: '',
        operator: {},
    },
    extraReducers: {
        // Загрузка
        [fetchAuth.pending]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        // В случае успеха
        [fetchAuth.fulfilled]: (state ,action) => {
            state.isLoading = false;
            state.error = '';
            state.operator = action.payload;
        },
        // В случае ошибки
        [fetchAuth.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default authReducer.reducer;
