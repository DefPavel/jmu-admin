
import React from 'react';
import Header from './Header';
import SideBar from './SideBar';

const ItemsSideBar = [
  {
      url: '/',
      icon: 'home',
      text: 'Главная'
  },
];

const BaseLayout = ({children}) => {
  return (
    <div className='container-fluid d-flex mx-0 px-0 w-100 flex-column mh-100vh'>
      <Header text={ItemsSideBar[0].text} />
      <div className='container-fluid main-container d-flex'>
        <div className='col'>
          <SideBar items={ItemsSideBar} />
        </div>
        <div className='col'>
          {children}
        </div>
      </div>
     
    </div>
  )
};

export default BaseLayout;
