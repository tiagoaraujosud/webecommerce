import React from 'react';
import './Page.css';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';

function Page2 () {
    
    const handleClickRegister = (values) => console.log.values;

    const validationRegister = yup.object().shape({
        email: yup.string().email("Não é um email válido").required("Este campo é obrigatório!"),
        password: yup.string().min(8, "A senha deve ter pelo menos 8 caracteres.").required("Este campo é obrigatório!"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais!")
    })

    return (
        
        <div>
        
        <div className="container">
            <h1>Registro</h1>
            <Formik initialValues={{}} onSubmit={handleClickRegister} validationSchema={validationRegister}>

            <Form className='login-form'>

                <div className='login-form-group'>
                
                <Field name='email' className='form-field' placeHolder='email'></Field>

                <ErrorMessage component='spam' name='email' className='form-error'></ErrorMessage>

                </div>


                <div className='login-form-group'>
                
                <Field name='password' className='form-field' placeHolder='senha'></Field>

                <ErrorMessage component='spam' name='password' className='form-error'></ErrorMessage>

                </div>

                <div className='login-form-group'>
                
                <Field name='confirmPassword' className='form-field' placeHolder='Confirme sua senha'></Field>

                <ErrorMessage component='spam' name='confirmPassword' className='form-error'></ErrorMessage>

                </div>

                <button className='button' type='submit'>Registrar</button>

            </Form>

            </Formik>

        
        </div>

        </div>
    );


}

export default Page2;