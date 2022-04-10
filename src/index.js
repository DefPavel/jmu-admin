import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Login from './pages/Login'
import store from './store';
import axios from 'axios';
import Cookies from 'universal-cookie/es6';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';


const cookies = new Cookies();

const PrivateRoute = ({ children }) => {
  const token = cookies.get('auth-token')
  if (token) return children
  else return <Navigate to="/login" />

}

const LoginRoute =({ children }) => {
  const token = cookies.get('auth-token')
  if (token) return <Navigate to="/" />
  else  return children
}

axios.interceptors.request.use((config) => {
  if (cookies.get('auth-token'))
      config.headers.common['auth-token'] = cookies.get('auth-token');
  return config
});

axios.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  if (error.response.status === 419) {
      await cookies.remove('auth-token');
      window.location.href = '/login';
  }
  return Promise.reject(error);
});


ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" exact element={
                    <LoginRoute>
                        <Login />
                    </LoginRoute>
            }/>
             <Route path="/" exact element={
                    <PrivateRoute>
                        <App />
                    </PrivateRoute>
                }/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);