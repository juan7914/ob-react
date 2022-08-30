import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';



const ListFormik = () => {

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const initialCredentials = {
    email: '',
    password: '',
}

const schemaLogin = yup.object().shape({
    
    email: yup.string().email(' please insert Email valid').required('Email is requered'),
    password: yup.string().required('password is requered'), 

});
    return (
        <div>
            <h1>Form-Formik</h1>
            <Formik
                // values initials
                initialValues={{ initialCredentials}}
                // validate with yup
                validationSchema={schemaLogin}
                // fuction onSubmit async
                onSubmit={async (values) => {
                await sleep(1000);
                alert(JSON.stringify(values, null, 2));
                //we save in aplication the credentials 
                localStorage.setItem('credentials' , values)
            }}
            >
            {/* props  */}
            {({ isSubmitting, touched,  errors }) => (

                <Form>
                    <label htmlFor="email">Email</label>
                    <Field id='email' name="email" placeholder="jane@acme.com" type="email" />

                    {/*  control error  of Email */}
                    {
                        errors.email && touched.email ?(
                        <div>
                            <ErrorMessage name="email" />
                        </div>
                        )
                        : null
                        
                    }
                    <label htmlFor="password">Password</label>
                    <Field  id='password' name="password" placeholder="password" type="password" />

                    {/*  control error  of password */}
                    {
                        errors.password && touched.password ? (
                        <div>
                            <ErrorMessage name="password" />
                        </div>
                        )
                        : null
                        
                    }
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                    {
                        isSubmitting ? (<p>login your Credentials...</p>) : null
                    }
                </Form>
            )}
            </Formik>
        </div>
    );
}

export default ListFormik;
