import React from 'react';
import Cookies from 'universal-cookie/es6';

const Header = () => {

    const logOut = () => {
        localStorage.setItem('location', '');
        const cookies = new Cookies();
        cookies.remove('auth-token');
        window.location.reload();
    }
    const getTitle = localStorage.getItem('location');
  return (
    <header className='d-flex w-100'>
        <div className='col d-flex'>
            <div className='col hide-menu-btn'></div>
            <div className='col'>
                <p>JMU-Админ</p>
            </div>
        </div>
        <div className='col d-flex px-0'>
            <div className='col d-flex align-items-center px-3'>
                <h2 className='page-title'>{getTitle}</h2>
            </div>
            <div className='col d-flex px-0 justify-content-end'>
                <ul className='control-header'>
                    <li className='home' onClick={() =>  {
                        window.location='/';
                        localStorage.setItem('location', 'Главная');
                    }} />
                    <li className='sync' onClick={() =>  window.location.reload(false)}/>
                    <li className='logout' onClick={() => logOut()}/>
                </ul>
            </div>
        </div>
    </header>
  )
};

export default Header;
