import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import sesionsReducer from './reducers/sesionsReducer';
import usersReducer from './reducers/usersReducer';


const store = configureStore({
  reducer: {
    login: authReducer,
    session: sesionsReducer,
    user: usersReducer,
  }
});

export default store;
