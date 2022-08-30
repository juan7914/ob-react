import React  from 'react';
import { Field , Form , Formik , ErrorMessage} from 'formik';
import * as Yup from 'yup'

//models
import { User }  from '../../models/user.class.js';
import { ROLES } from '../../models/roles.enum.js';



const RegisterFormik = () => {

     let user = new  User();

    const initialValues = 
        {
            username : "",            
            email : "",
            password : "",
            confirm : "",
            roles : ROLES.USER
        }
    
    const registerSchema = Yup.object().shape(

        {
            username : Yup.string().min(8 , 'username too schort')
                    .max(12 , 'username too log').required('username required'),
                email : Yup.string()
                        .email(' please insert Email valid').required('Email is requered'), 
                roles : Yup.string()
                       .oneOf([ROLES.USER , ROLES.ADMIN], 'You must select roles: User / Admin')
                       .required('required Roles'),     
                password: Yup.string()
                        .min(8 , 'password too short')
                        .required('password is requered'),
                confirm : Yup.string()
                         .when('password', {
                            is : value => (value && value.length > 0 ? true : false),
                            then: Yup.string().oneOf(
                                [Yup.ref('password')],
                                'Password must match '
                            )
                         }).required('you must  confirm of password')

        }
    )



    // const Submit = (values)=> {
    //    alert('Register user', values);
    //  }


    
    

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                // values initials
                initialValues={ initialValues }
                // validate with yup
                validationSchema={registerSchema}
                // fuction onSubmit async
                onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(values, null, 2));
                //we save in aplication the credentials 
                //localStorage.setItem('credentials' , values)
            }}         
            
            >
             {({ touched, errors, isSubmitting }) => (

                <Form>

                    <label htmlFor="username">username</label>
                    <Field id='username' name="username" placeholder="you username" type="text" />

                    {/*  control error  of username */}
                    {
                        errors.username && touched.username ?(
                        <div>
                            <ErrorMessage name="username" />
                        </div>
                        )
                        : null
                        
                    }


                    <label htmlFor="email">email</label>
                    <Field id='email' name="email" placeholder="jane@acme.com" type="email" />

                    {/*  control error  of Email */}
                    {
                        errors.email && touched.email && (
                       
                            <ErrorMessage name="email" component='div' />
                        
                        )
                       
                    }

                    <label htmlFor="password">password</label>
                    <Field  id='password' name="password" placeholder="password" type="password" />

                    {/*  control error  of password */}
                    {
                        errors.password && touched.password && (
                        
                            <ErrorMessage name="password" component='div'/>
                        
                        )
                        
                        
                    }

                    <label htmlFor="confirm">confirm</label>
                    <Field  id='confirm' name="confirm" placeholder=" confirm password" type="password" />

                    {/*  control error  of  confirm password */}
                    {
                        errors.confirm && touched.confirm && (
                        
                            <ErrorMessage name="confirm" component='div'/>
                    
                        )
                      
                        
                    }

                    <button type="submit" style={{marginTop: '20px'}}>Register Account</button>

                    {
                        isSubmitting ? (<p>Sending your Credentials...</p>) : null
                    }
                   

                </Form>

                )
            } 
            </Formik>
        </div>
    );
}



export default RegisterFormik;
