import {React, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {fetchAuth} from 'store/reducers/authReducer';
import Cookies from 'universal-cookie/es6';
import { rand } from 'random-bytes-js';
import CryptoJS from 'crypto-js'

const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cookies = new Cookies();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const {error} = useSelector(state => state.login);

    const signIn = async (e) => {
        e.preventDefault();
        let iv = rand(32);

        if(iv.length > 32)
            iv = iv.slice(0,32);

        const AesKey = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_AES_KEY);
        const byteIv = CryptoJS.enc.Hex.parse(iv);
        const encryptedStringHex = CryptoJS.AES.encrypt(password, AesKey, {
            iv: byteIv,
            mode: CryptoJS.mode.CBC,
            format: CryptoJS.format.Hex
        }).ciphertext;

        const pass = CryptoJS.enc.Hex.stringify(byteIv) + ':' + encryptedStringHex.toString(CryptoJS.enc.Hex);
        await dispatch(fetchAuth({password: pass, login, id_module: 1}));
        if (cookies.get('auth-token')) navigate('/')
    }

    return (
        <form onSubmit={(e) => signIn(e)} 
            className='container-fluid d-flex align-items-center justify-content-center mh-100vh'>
            <div className='auth-form shadow-sm d-flex flex-column'>
                <div className='col d-flex flex-column align-items-center justify-content-center header-loginForm'>
                    <h5 className='m-0'>JMU</h5>
                    <p>Administration</p>
                </div>
            <div className='mw-100 d-flex flex-column justify-content-center px-4 login-body'>
                <div className='mb-3'>
                    <label className='form-label'>Логин:</label>
                    <input 
                        maxLength={25}
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        className='form-control' 
                        id='login' 
                        required />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Пароль:</label>
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-control'
                        type='password' 
                        id='password'
                        required />
                </div>
            </div>
            <div className='col d-flex align-items-center'>
                <div className='col d-flex justify-content-end'>
                    <button className='btn btn-primary me-3'>Войти</button>
                </div>
                { error && 
                    <div className='auth-form__msg-box alert alert-danger'>{error}</div>
                }
            </div>
            </div>
        </form>
    );
};

export default LoginForm;