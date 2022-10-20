import React from 'react';
import api from '../../services/api';

import {Formik, Form, Field, ErrorMessage} from 'formik';


function AddProducts () {
  const initialValues = {name: '', price: ''};

  const handleClickRegister = (values) => {
    const data = {
      name: values.name,
      price: values.price
    };
    api.post('/products', data);
  };

  return (
    <div>
      <div className="container">
        <h1>Add New Product</h1>

        <Formik 
          initialValues={initialValues} 
        
          onSubmit={(values) =>
            {
              handleClickRegister(values)
              window.location.href = '/products';
            }
          }
        >
          {props => 
            {
              const { values, handleSubmit, handleChange } = props

              return (
                <Form className='form' onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <Field 
                      name='name' 
                      className='form-field' 
                      placeholder='Product name'
                      value={values.name} 
                      onChange={
                        e => {
                          handleChange(e);
                        }
                      }
                    />

                    <ErrorMessage name='name' className='form- error'></ErrorMessage>
                  </div>

                  <div className='login-form-group'>
                    <Field 
                      name='price' 
                      type='number' 
                      className='form-field' 
                      placeholder='price' 
                      value={values.price} 
                      onChange={
                        e => {
                          handleChange(e)
                        }
                      }
                    />

                    <ErrorMessage name='price' className='form-error'></ErrorMessage>
                  </div>

                  <button className='button' type='submit'>Save new Product</button>
                </Form>
              )
            }
          }
        </Formik>
      </div>
    </div>
  );
}

export default AddProducts;