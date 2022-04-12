import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { Row, Card, Container, Form, Button } from 'react-bootstrap';
import {fetchGetAuthGroups, fetchGetOrganizations, fetchNewUsers} from 'store/reducers/usersReducer';
import { rand } from 'random-bytes-js';
import CryptoJS from 'crypto-js';


const NewUserForm = () => {

  
  const authGroups = useSelector(state => state.user.authGroups); 
  const organizations = useSelector(state => state.user.company);

  const [firstName, setFirstName] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [office, setOffice] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [selectedAuth, setSelectedAuth] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchGetOrganizations());
  }, [dispatch]);

  useEffect(() => {
    if (organizations.length > 0) {
      dispatch(fetchGetAuthGroups(organizations[0].id));
      setSelectedCompany(organizations[0].id);
    }
       
}, [organizations]); 

const GroupsByOrganization = (id_org) => {
  dispatch(fetchGetAuthGroups(id_org));
};

const parseOrganization = () => {
  const options = [];
  for (let index = 0; index < organizations.length; index++)
      options.push(
          <option key={organizations[index].id} value={organizations[index].id}>{organizations[index].name}</option>
      )
  return options;
};
const parseAuthGroups = () => {
  const options = [];
  for (let index = 0; index < authGroups.length; index++)
      options.push(
          <option key={authGroups[index].id} value={authGroups[index].id}>{authGroups[index].name}</option>
      )
  return options;
};


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
            <Form onSubmit={ async (e) => {
              e.preventDefault();

              let iv = rand(32);

              if(iv.length > 32)
                  iv = iv.slice(0,32);
      
              const AesKey = CryptoJS.enc.Utf8.parse(process.env.REACT_APP_AES_KEY);
              const byteIv = CryptoJS.enc.Hex.parse(iv);
              const encryptedStringHex = CryptoJS.AES.encrypt(password, AesKey, {
                  iv: byteIv,
                  mode: CryptoJS.mode.CBC,
                  format: CryptoJS.format.Hex
              }).ciphertext;
      
              const pass = CryptoJS.enc.Hex.stringify(byteIv) + ':' + encryptedStringHex.toString(CryptoJS.enc.Hex);

              await dispatch(fetchNewUsers(
                {
                  firstname: firstName,
                  middlename: name,
                  lastname: lastName,
                  phone : phone,
                  email : email,
                  login : login,
                  cabinet: office,
                  password : pass,
                  organizations : selectedCompany,
                  group : selectedAuth
                }
              ));
              navigate('/users');
            }}>
              <Row>
                 <div className='col-lg-4 col-md-6'>
                 <Form.Group className="mb-3">
                    <Form.Label>{selectedAuth}</Form.Label>
                    <Form.Control 
                      required 
                      placeholder="Пупкин" 
                      value={firstName} 
                      onChange={(e) => setFirstName(e.target.value)} />
                  </Form.Group>
                 </div>
                 <div className='col-lg-4 col-md-6 mt-sm-4 mt-lg-0 mt-md-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Имя:</Form.Label>
                    <Form.Control 
                      required 
                      placeholder="Василий"
                      value={name} 
                      onChange={(e) => setName(e.target.value)} />
                  </Form.Group>
                 </div>
                 <div className='col-lg-4 mt-sm-4 mt-lg-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Отчетсво:</Form.Label>
                    <Form.Control 
                      required 
                      placeholder="Васильевич" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}/>
                  </Form.Group>
                 </div>
              </Row>
              <Row>
                <div className='col-lg-4'>
                  <Form.Group className="mb-3">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control 
                        required 
                        placeholder="yourEmail@gmail.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                  </Form.Group>
                </div>
                <div className='col-lg-4 mt-sm-4 mt-lg-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Номер телефона:</Form.Label>
                    <Form.Control 
                      required 
                      placeholder="8 (800) 355-35-35"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}/>
                  </Form.Group>
                 </div>
                 <div className='col-lg-4 mt-sm-4 mt-lg-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Кабинет:</Form.Label>
                    <Form.Control 
                      required 
                      placeholder="1-228" 
                      value={office}
                      onChange={(e) => setOffice(e.target.value)}/>
                  </Form.Group>
                 </div>
              </Row>
              <Row>
                <div className='col-lg-4 mt-sm-4 mt-lg-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Организация:</Form.Label>
                    <Form.Select
                      onChange={e => GroupsByOrganization(e.target.value)}
                      className={'form-control'} >
                        {parseOrganization()}
                      </Form.Select>
                  </Form.Group>
                </div>
                <div className='col-lg-4 mt-sm-4 mt-lg-0'>
                <Form.Group className="mb-3">
                    <Form.Label>Группа:</Form.Label>
                    <Form.Select
                      disabled={organizations.length === 0}
                      onChange={e => setSelectedAuth(e.target.value)}
                      className={'form-control'} >
                        {parseAuthGroups()}
                      </Form.Select>
                  </Form.Group>
                </div>
              </Row>
              <Row>
                <div className='col-lg-4 mt-sm-4 mt-lg-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Логин:</Form.Label>
                    <Form.Control 
                      required 
                      placeholder="yourLogin" 
                      value={login}
                      onChange={(e) => setLogin(e.target.value)}/>
                  </Form.Group>
                </div>
                <div className='col-lg-4 mt-sm-4 mt-lg-0'>
                 <Form.Group className="mb-3">
                    <Form.Label>Пароль:</Form.Label>
                    <Form.Control 
                      type='password'
                      required 
                      placeholder="secreactKey" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}/>
                  </Form.Group>
                </div>
              </Row>
              <Row>
                <div className='col d-flex justify-content-end'>
                  <Button type='sumbit' variant='primary'>Создать</Button>
                </div>
              </Row>
            </Form>
        </Card>

    </Container>
  )
}

export default NewUserForm
