import React from 'react'
import { Row, Card, Container, Form, Button } from 'react-bootstrap'


<div class="breadcrumbs d-flex pb-3">
    <p class="crumbs"> </p>
    <p onclick="window.location = '/admin/index'; ">Главная</p>
    <p>/</p>
    <p onclick="cancel()">Пользователи</p>
    <p>/</p>
<b class="activeCrumb">Создание пользователя</b>
</div>
const NewUserForm = () => {
  return (
    <Container fluid className='w-100 d-flex flex-column pt-4'>
        <div className="breadcrumbs d-flex pb-3">
            <p className="crumbs"> </p>
            <p onClick={() => window.location = '/'}> Главная</p>
            <p>/</p>
            <p onClick={() => window.location = '/users'}> Пользователи</p>
            <p>/</p>
            <b className='activeCrumb'>Создание пользователя</b>
        </div>
        <Card className='override-card shadow-sm d-flex mb-3'>
            <Form>
              <Row>
                 <div className='col-lg-4 col-md-6'>
                 <Form.Group className="mb-3">
                    <Form.Label>Фамилия:</Form.Label>
                    <Form.Control required placeholder="Пупкин" />
                  </Form.Group>
                 </div>
                 <div className='col-lg-4 col-md-6 mt-sm-4 mt-lg-0 mt-md-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Имя:</Form.Label>
                    <Form.Control required placeholder="Василий" />
                  </Form.Group>
                 </div>
                 <div className='col-lg-4 mt-sm-4 mt-lg-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Отчетсво:</Form.Label>
                    <Form.Control required placeholder="Васильевич" />
                  </Form.Group>
                 </div>
              </Row>
              <Row>
                <div className='col-lg-4'>
                  <Form.Group className="mb-3">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control required placeholder="yourEmail@gmail.com" />
                  </Form.Group>
                </div>
                <div className='col-lg-4 mt-sm-4 mt-lg-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Номер телефона:</Form.Label>
                    <Form.Control required placeholder="8 (800) 355-35-35" />
                  </Form.Group>
                 </div>
                 <div className='col-lg-4 mt-sm-4 mt-lg-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Кабинет:</Form.Label>
                    <Form.Control required placeholder="1-228" />
                  </Form.Group>
                 </div>
              </Row>
              <Row>
                <div className='col-lg-4 mt-sm-4 mt-lg-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Организация:</Form.Label>
                    <Form.Control required placeholder="1-228" />
                  </Form.Group>
                </div>
                <div className='col-lg-4 mt-sm-4 mt-lg-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Группа:</Form.Label>
                    <Form.Control required placeholder="1-228" />
                  </Form.Group>
                </div>
              </Row>
              <Row>
                <div className='col-lg-4 mt-sm-4 mt-lg-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Логин:</Form.Label>
                    <Form.Control required placeholder="yourLogin" />
                  </Form.Group>
                </div>
                <div className='col-lg-4 mt-sm-4 mt-lg-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control required placeholder="secreactKey" />
                  </Form.Group>
                </div>
              </Row>
              <Row>
                <div className='col d-flex justify-content-end'>
                  <Button type='sumbit' variant='primary' >Сохранить</Button>
                </div>
              </Row>
            </Form>
        </Card>

    </Container>
  )
}

export default NewUserForm
