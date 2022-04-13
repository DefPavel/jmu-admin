import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGetCorporates = createAsyncThunk(
    'organizations/get',
    async (payload, thunkApi) => {
        try {
            console.log('popal');
            const response = await axios.get('/api/organizations/get', payload);
            return response.data;
        } 
        catch (error) {
            return thunkApi.rejectWithValue(error?.response?.data || 'Произошла непредвиденная ошибка')
        }
    }
);

const corporatesReducer = createSlice({
    name: 'corporates',
    initialState: {
        isLoading: false,
        error: '',
        organizations: [],
    },
    extraReducers: {
        // Загрузка
        [fetchGetCorporates.pending]: (state) => {
            state.isLoading = true;
            state.error = '';
        },
        // В случае успеха
        [fetchGetCorporates.fulfilled]: (state ,action) => {
            state.isLoading = false;
            state.error = '';
            state.organizations = action.payload;
        },
        // В случае ошибки
        [fetchGetCorporates.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default corporatesReducer.reducer;