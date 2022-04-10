import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';


const store = configureStore({
  reducer: {
    login: authReducer
  }
});

export default store;
