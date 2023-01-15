import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';
import chatPng from '../images/chat.png'

function Login(){

    const navigate = useNavigate();

    const initialValues = {
        username: '',
        password: ''
    }

    const validationSchema = Yup.object().shape({
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
                        <img src={chatPng} className='img-login'/>
                    </div>
                    <div className='column-register column-input'>
                        <h1>Login page</h1>
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
                                placeholder='(Ex. Username...)'
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
                            <button className='button' type='submit'>Login</button>
                        </div>
                        <div>
                            <Link to='/register'>Sign up</Link>
                        </div>
                    </div>
                </Form>
            </Formik>

        </div>
    );
}

export default Login;