import React, {useEffect } from 'react';
import { Container, Col, Table } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { fetchGetUsers ,fetchDeleteUsers } from 'store/reducers/usersReducer';
import moment from 'moment';

const UsersForm = () => {

  const dispatch = useDispatch();
  const dataUsers = useSelector(state => state.user.users);

  useEffect(() => {
    dispatch(fetchGetUsers())
  }, [dispatch]);

  return (
   <Container fluid className='w-100 d-flex flex-column pt-4'>

     <div className="breadcrumbs d-flex pb-3">
            <p className="crumbs"> </p>
            <p onClick={() => window.location = '/'}> Главная</p>
            <p>/</p>
            <p onClick={() => window.location = '/users'}> Пользователи</p>
            <p>/</p>
            <b className='activeCrumb'>Все пользователи</b>
        </div>

     <div className='card override-card shadow-sm'>
       <div className='card-title card-title-control mb-4'>
        <Col>
          <h3>Список пользователей</h3>
        </Col>
        <Col>
          <div 
            className='card-button card-button_add' 
            onClick={() => window.location = '/users/new'} />
        </Col>
       </div>

       <Table responsive bordered striped hover>
       <thead>
            <tr>
              <th>№</th>
              <th>Логин</th>
              <th>Email</th>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Телефон</th>
              <th>Кабинет</th>
              <th>Группа</th>
              <th>Организация</th>
              <th>Активность</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
          {
              dataUsers?.map((item , i) => {
                return <tr key={i}>
                        <td width={15}>{i + 1}</td>
                        <td>{item.login}</td>
                        <td>{item.email}</td>
                        <td>{item.firstname}</td>
                        <td>{item.middlename}</td>
                        <td>{item.lastname}</td>
                        <td>{item.phone}</td>
                        <td>{item.cabinet}</td>
                        <td>{item.groupName}</td>
                        <td>{item.orgName}</td>
                        <td>{moment(item.lastActive).format("YYYY.MM.DD h:mm:ss")}</td>
                        <td className='actionColumn'>
                          <div>
                            <div className='card-button card-button_edit' />
                            <div className='card-button card-button_remove' 
                                onClick={ async () => {
                                await dispatch(fetchDeleteUsers(item));
                                await dispatch(fetchGetUsers());
                              }} 
                            />
                          </div>
                        </td>
                    </tr>})
            }

          </tbody>
       </Table>
     </div>

   </Container>
  )
}

export default UsersForm
