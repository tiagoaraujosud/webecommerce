import React from 'react';
import api from '../../services/api';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import registerSchema from '../../Validation/registerValidation'

function Register () {
  const initialValues = {email: '', password: ''};

  const handleClickRegister = (values) => {
    const data = {
      email: values.email,
      password: values.password
    };
    api.post('/users', data);
  };

  return (
    <div>
      <div className="container">
        <h1>Sign Up</h1>

        <Formik 
          initialValues={initialValues} 
          validationSchema={registerSchema}
          onSubmit={(values) =>
            {
              handleClickRegister(values)
              window.location.href = '/login';
            }
          }
        >
          {props => 
            {
              const { values, handleSubmit, handleChange } = props

              return (
                <Form className='login-form' onSubmit={handleSubmit}>
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

                  <button className='button' type='submit'>Save</button>
                </Form>
              )
            }
          }
        </Formik>
      </div>
    </div>
  );
}

export default Register;