import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';
import logo from '../images/logo192.png'

function SignUp(){

    const navigate = useNavigate();

    const initialValues = {
        username: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        username: Yup.string().required(),
        password: Yup.string().required()
    });

    const onSubmitLogin = (data) => {
        const {username, password} = data;

        axios.post('http://localhost:3000/login', {
            username,
            password
        })
        .then(response => {
           navigate(`/${response.id}`);
        })
    }

    return(
        <div className="main-container">
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitLogin}
            >
                <Form  className='inner-container'>
                    <div className='column-register column-img'>
                        <img src={logo} className='img-login'/>
                        <h2>React Vlog</h2>
                    </div>
                    <div className='column-register column-input'>
                        <h1>Sign-up page</h1>

                        <div className='input-container'>
                            <label htmlFor='name'>Name:</label>
                            <ErrorMessage
                                name='name'
                                className='error-message'
                                component='span'
                            />
                            <Field
                                className='input-register' 
                                name='name'
                                placeholder='(Ex. John...)'
                            />
                        </div>

                        <div className='input-container'>
                            <label htmlFor='email'>E-mail:</label>
                            <ErrorMessage
                                name='email'
                                className='error-message'
                                component='span'
                            />
                            <Field
                                className='input-register' 
                                name='email'
                                placeholder='(Ex. email@mail.com...)'
                            />
                        </div>

                        <div className='input-container'>
                            <label htmlFor='username'>Username:</label>
                            <ErrorMessage
                                name='username'
                                className='error-message'
                                component='span'
                            />
                            <Field
                                className='input-register' 
                                name='username'
                                placeholder='(Ex. User123...)'
                            />
                        </div>
                        <div className='input-container'>
                            <label htmlFor='password'>Password:</label>
                            <ErrorMessage
                                name='password'
                                className='error-message'
                                component='span'
                            />
                            <Field
                                className='input-register'
                                name='password'
                                placeholder='(Ex. 123...)'
                            />
                        </div>
                        <div>
                            <button className='button' type='submit'>Sign up</button>
                        </div>
                        <div>
                            <Link to='/login'>Login</Link>
                        </div>
                    </div>
                </Form>
            </Formik>

        </div>
    );
}

export default SignUp;