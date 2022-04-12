import React from 'react'
import { Card, Container, Form } from 'react-bootstrap'


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

            </Form>
        </Card>

    </Container>
  )
}

export default NewUserForm
