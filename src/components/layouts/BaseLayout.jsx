
import React from 'react';
import Header from './Header';
import SideBar from './SideBar';

const BaseLayout = ({children}) => {
  return (
    <div className='container-fluid d-flex mx-0 px-0 w-100 flex-column mh-100vh'>
      <Header />
      <div className='container-fluid main-container d-flex'>
        <div className='col'>
          <SideBar />
        </div>
        <div className='col'>
          {children}
        </div>
      </div>
     
    </div>
  )
};

export default BaseLayout;
