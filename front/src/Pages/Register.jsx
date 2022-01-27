import React,{useState} from 'react';
import './Page.css';
import api from '../services/api';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

function Register () {
  const handleClickRegister = (event) => {
    const data = {
      email: login,
      senha: password
    };
    api.post('/users', data);
  };

  const createUser = (event) => {
    event.preventDefault();
    let data = {
      email: event.target[0].value,
      senha: event.target[1].value
    };
    console.log(data)
  }

  const signupSchema = Yup.object().shape({
    email: Yup.string().email("It is not a email adress").required('Required'),
    senha: Yup.string().min(8, "Must be 8 characters or more").required('Required')
  });

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className="container">
        <h1>Registro</h1>
        <Formik initialValues={{email: '', password: ''}}  validationSchema={signupSchema}>
          <Form className='login-form' onSubmit={handleClickRegister}>
            <div className='login-form-group'>
              <Field name='email' className='form-field' placeholder='email@email.com' value={login} onChange={e => setLogin(e.target.value)}></Field>
              <ErrorMessage name='email' className='form-error'></ErrorMessage>
            </div>

            <div className='login-form-group'>
              <Field name='password' type='password' className='form-field' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}></Field>
              <ErrorMessage name='password' className='form-error'></ErrorMessage>
            </div>

            <button className='button' type='submit'>Save</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Register;