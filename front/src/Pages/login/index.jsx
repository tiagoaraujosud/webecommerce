import React, { useState } from 'react';
import api from '../../services/api';

import {Formik, Form, Field, ErrorMessage} from 'formik';

function Login () {
  const initialValues = {email: '', password: ''};

  const handleClickLogin = async (values) => {
    const data = {
      email: values.email,
      password: values.password
    };
    const response = await api.post('/login', data);
    const token = localStorage.getItem('token', response);
    if(token){
      window.location.href = '/products';
      console.log(token);
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Login</h1>

        <Formik 
          initialValues={initialValues} 
          onSubmit={(values) =>
            {
              handleClickLogin(values)
            }
          }
        >
          {props => 
            {
              const { values, handleChange, handleSubmit } = props

              return (
                <Form className='login-form' onSubmit={e => {
                  e.preventDefault();
                  handleSubmit();
                }}>
                  <div className='login-form-group'>
                    <Field 
                      name='email' 
                      className='form-field' 
                      placeholder='email@email.com'
                      value={values.email} 
                      onChange={
                        e => {
                          handleChange(e);
                        }
                      }
                    />

                    <ErrorMessage name='email' className='form- error'></ErrorMessage>
                  </div>

                  <div className='login-form-group'>
                    <Field 
                      name='password' 
                      type='password' 
                      className='form-field' 
                      placeholder='password' 
                      value={values.password} 
                      onChange={
                        e => {
                          handleChange(e)
                        }
                      }
                    />

                    <ErrorMessage name='password' className='form-error'></ErrorMessage>
                  </div>

                  <button className='button' type='submit'>Enter</button>
                </Form>
              )
            }
          }
        </Formik>
      </div>
    </div>
  );
}

export default Login;