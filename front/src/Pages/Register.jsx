import React,{useState} from 'react';
import './Page.css';
import api from '../services/api';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import registerSchema from '../Validation/registerValidation';

function Register () {
  const handleClickRegister = async (event) => {
    event.preventDefault();
    let data = {
      email: login,
      senha: password
    };
  
    const isValid = await registerSchema.isValid(data);
    console.log(isValid);
    api.post('/users', data);
  };

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className="container">
        <h1>Registro</h1>
        <Formik initialValues={{email: '', password: ''}} validationSchema={registerSchema}>
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