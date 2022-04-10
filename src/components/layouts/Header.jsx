import React from 'react';
import Cookies from 'universal-cookie/es6';
const Header = () => {

const logOut = () => {
    const cookies = new Cookies()
    cookies.remove('auth-token');
    window.location.reload();
}

  return (
    <header className='d-flex w-100'>
        <div className='col d-flex'>
            <div className='col hide-menu-btn'></div>
            <div className='col'>
                <p>jmu Админ</p>
            </div>
        </div>
        <div className='col d-flex px-0'>
            <div className='col d-flex align-items-center px-3'>
                <h2 className='page-title'>Title</h2>
            </div>
            <div className='col d-flex px-0 justify-content-end'>
                <ul className='control-header'>
                    <li className='home' onClick={() => window.location='/'} />
                    <li className='sync' onClick={() =>  window.location.reload(false)}/>
                    <li className='logout' onClick={() => logOut()}/>
                </ul>
            </div>
        </div>
    </header>
  )
};

export default Header;
