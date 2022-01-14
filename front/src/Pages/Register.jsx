import React,{useState} from 'react';
import './Page.css';
import api from '../services/api';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

function Register () {
  async function handleClickRegister(){
    const data = {
      email: login,
      senha: password
    }

    await api.post('/users', data)
  }

  const validationRegister = yup.object().shape({
    email: yup.string().email("Não é um email válido").required("Este campo é obrigatório!"),
    password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres.").required("Este campo é obrigatório!"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais!")
  })

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div className="container">
        <h1>Registro</h1>
        <Formik initialValues={{}}  validationSchema={validationRegister}>
          <Form className='login-form'>
            <div className='login-form-group'>
              <Field name='email' className='form-field' placeholder='email' value={login} onChange={e => setLogin(e.target.value)}></Field>
              <ErrorMessage name='email' className='form-error'></ErrorMessage>
            </div>

            <div className='login-form-group'>
              <Field name='password' type='password' className='form-field' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}></Field>
              <ErrorMessage name='password' className='form-error'></ErrorMessage>
            </div>

            <button className='button' onClick={handleClickRegister} type='submit'>Save</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Register;