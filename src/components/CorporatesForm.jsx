import React, {useEffect}  from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Container ,Col ,OverlayTrigger ,Tooltip, Table } from 'react-bootstrap'
import { fetchGetCorporates } from 'store/reducers/corporatesReducer';
import ReactPaginate from 'react-paginate';

const CorporatesForm = () => {

  const dispatch = useDispatch();
  const dataCorporates = useSelector(state => state.corporate.organizations.data);
  const totalPage = useSelector(state => state.corporate.organizations.pagination?.lastPage);

  useEffect(() => {
    dispatch(fetchGetCorporates())
  }, [dispatch]);

  const paginate = pageNumber => {
		pageNumber = pageNumber.selected + 1;
        if (pageNumber > 0 && pageNumber <= totalPage)
			dispatch(fetchGetCorporates())
	}

  return (
    <Container fluid className='w-100 d-flex flex-column pt-4'>
      <div className="breadcrumbs d-flex pb-3">
            <p className="crumbs"> </p>
            <p onClick={() => window.location = '/'}> Главная</p>
            <p>/</p>
            <p onClick={() => window.location = '/corparates'}> Организация</p>
            <p>/</p>
            <b className='activeCrumb'>Все организация</b>
        </div>

        <div className='card override-card shadow-sm'>
        <div className='card-title card-title-control mb-4'>
          <Col>
            <h3>Список организаций</h3>
          </Col>
          <Col>
          <OverlayTrigger
             overlay={
              <Tooltip>
                Создать организацию
              </Tooltip>
            }>
              <div 
              className='card-button card-button_add' 
              onClick={() => {
                window.location = '/users/new';
                localStorage.setItem('location', 'Создание огранизации');
            }} />
            </OverlayTrigger>
        </Col>
        </div>
        <Table responsive bordered striped hover>
          <thead>
            <tr>
              <th>№</th>
              <th>Название</th>
              <th>Аббревиатура</th>
              <th>Адрес</th>
              <th>Email</th>
              <th>Телефон</th>
              <th>Директор</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
          {
              dataCorporates?.map((item , i) => {
                return <tr key={i}>
                        <td width={15}>{i + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.short_name}</td>
                        <td>{item.address}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.director}</td>
                        <td className='actionColumn'>
                          <div>
                            <div className='card-button card-button_edit' />
                            <div className='card-button card-button_remove' 
                                onClick={ async () => {
                                //await dispatch(fetchDeleteUsers(item));
                                //await dispatch(fetchGetUsers());
                              }} 
                            />
                          </div>
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
  )
}

export default CorporatesForm
