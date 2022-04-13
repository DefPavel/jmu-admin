import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import corporatesReducer from './reducers/corporatesReducer';
import sesionsReducer from './reducers/sesionsReducer';
import usersReducer from './reducers/usersReducer';


const store = configureStore({
  reducer: {
    locate: '',
    login: authReducer,
    session: sesionsReducer,
    user: usersReducer,
    corporate : corporatesReducer
  }
});

export default store;
