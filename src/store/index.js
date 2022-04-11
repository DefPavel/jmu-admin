import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import sesionsReducer from './reducers/sesionsReducer';


const store = configureStore({
  reducer: {
    login: authReducer,
    session: sesionsReducer
  }
});

export default store;
