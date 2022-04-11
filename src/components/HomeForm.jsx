import moment from 'moment';
import React, {useEffect } from 'react';
import { Table } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { fetchGetSession } from 'store/reducers/sesionsReducer';

const HomeForm = () => {

  const dispatch = useDispatch();
  const {sessions} = useSelector(state => state.session);

  useEffect(() => {
    dispatch(fetchGetSession())
  }, [dispatch]);

  return (
    
    <div className='container-fluid w-100 d-flex flex-column pt-4'>
      <div className='card override-card shadow-sm'>
        <div className='card-title mb-4'>
            <h3>Активные сессии</h3>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>№</th>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Модуль</th>
              <th>Группа</th>
              <th>Организация</th>
              <th>Последняя активность</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
          {
              sessions?.map((item , i) => {
                return <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item.firstname}</td>
                        <td>{item.middlename}</td>
                        <td>{item.lastname}</td>
                        <td>{item.module}</td>
                        <td>{item.group}</td>
                        <td>{item.organization}</td>
                        <td>{moment(item.last_active_time).format("YYYY.MM.DD; h:mm:ss")}</td>
                        <td>{item.status === 'true' ? 'Активная' : 'Не активная'}</td>
                    </tr>})
            }
          </tbody>

        </Table>
      </div>
    </div>
  );

}

export default HomeForm;
