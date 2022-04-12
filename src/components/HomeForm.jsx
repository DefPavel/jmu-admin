import moment from 'moment';
import React, {useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import {useDispatch, useSelector} from 'react-redux';
import { fetchGetSession , fetchDeleteSession } from 'store/reducers/sesionsReducer';

const HomeForm = () => {

  const dispatch = useDispatch();
  const dataSession = useSelector(state => state.session.sessions.data);
  const totalPage = useSelector(state => state.session.sessions.pagination?.lastPage);

  useEffect(() => {
    dispatch(fetchGetSession())
  }, [dispatch]);

  const paginate = pageNumber => {
		pageNumber = pageNumber.selected + 1;
        if (pageNumber > 0 && pageNumber <= totalPage)
			dispatch(fetchGetSession())
	}

  return (
    <Container fluid className='w-100 d-flex flex-column pt-4'>

      <div className="breadcrumbs d-flex pb-3">
            <p className="crumbs"> </p>
            <b className='activeCrumb'>Главная</b>
            <p>/</p>
        </div>
       <div className='card override-card shadow-sm'>
        <div className='card-title mb-4'>
            <h3>Активные сессии</h3>
        </div>
        <Table responsive bordered striped hover>
          <thead>
            <tr>
              <th>№</th>
              <th>Фамилия</th>
              <th>Имя</th>
              <th>Отчество</th>
              <th>Модуль</th>
              <th>Группа</th>
              <th>Организация</th>
              <th>Активность</th>
              <th>Статус</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
          {
              dataSession?.map((item , i) => {
                return <tr key={i}>
                        <td width={15}>{i + 1}</td>
                        <td>{item.firstname}</td>
                        <td>{item.middlename}</td>
                        <td>{item.lastname}</td>
                        <td>{item.module}</td>
                        <td>{item.group}</td>
                        <td>{item.organization}</td>
                        <td>{moment(item.last_active_time).format("YYYY.MM.DD h:mm:ss")}</td>
                        {item.status === 'true' 
                        ? <td className="row__online"><span>online</span></td>
                        : <td className="row__offline"><span>offline</span></td>
                        }
                        <td className='actionColumn'>{item.status === 'true' 
                        ? <div className='card-button card-button_remove' 
                          onClick={ async () => {
                            await dispatch(fetchDeleteSession(item));
                            await dispatch(fetchGetSession());
                          }} />
                        : '' }
                       </td>
                    </tr>})
            }
          </tbody>
        </Table>
        <ReactPaginate style={{margin:0}}
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        pageCount={totalPage}
                        onPageChange={paginate}
                        containerClassName={'pagination pagination-sm justify-content-end'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                        activeClassName={'active'}
        />
      </div>
    </Container>
  );

}

export default HomeForm;
