
import React from 'react';
import { Col, Container } from 'react-bootstrap';
import Header from './Header';
import SideBar from './SideBar';

const ItemsSideBar = [
  {
      url: '/',
      icon: 'home',
      text: 'Главная'
  },
  {
    url: '/users',
    icon: 'person',
    text: 'Пользователи'
  },
  {
    url: '/corparates',
    icon: 'corporate',
    text: 'Организации'
  },
  {
    url: '/modules',
    icon: 'modules',
    text: 'Модули'
  },
  {
    url: '/groups',
    icon: 'groups',
    text: 'Группы'
  },
  {
    url: '/settings',
    icon: 'settings',
    text: 'Настройки'
  },
];

const BaseLayout = ({children}) => {
  return (
    <Container fluid className='d-flex mx-0 px-0 w-100 flex-column mh-100vh'>
       <Header text={ItemsSideBar[0].text} />
       <Container fluid className='main-container d-flex'>
          <Col>
              <SideBar items={ItemsSideBar} />
          </Col>
          <Col>
              {children}
          </Col>
       </Container>
      
    </Container>

  )
};

export default BaseLayout;
