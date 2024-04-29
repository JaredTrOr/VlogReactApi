import {useContext, useState} from 'react';
import { UserContext } from '../hooks/UserContext';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {Link, useNavigate} from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';

import '../styles/Login.css';
import logo from '../images/logo192.png'


function SignUp(){

    const [signMessage, setSignMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [usernameMessage, setUsernameMessage] = useState('');

    const {setValue} = useContext(UserContext);

    const navigate = useNavigate();

    const initialValues = {
        name:'',
        email:'',
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
        const {name, email, username, password} = data;
        const admin = 0;

        axios.post('http://localhost:3000/register', {
            name,
            email,
            username,
            password,
            admin
        }, {withCredentials: true})
        .then(response => {
            if(response.data.success){
                const user = response.data.user;
                setValue(user);
                setSignMessage('You have registered succesfully, welcome !!');
                setTimeout(() => {
                    setSignMessage('');
                    navigate(`/home`);
                },2000);
            }
            else{
                const message = response.data.msg;
                if(message === 'Email already exists'){
                    setEmailMessage(message);
                }
                else{
                    setUsernameMessage(message);
                }

            }

        })
        .catch(err => {
            console.log(err);
        });
    }

    const onUsernameClick = () => setUsernameMessage('');
    const onEmailClick = () => setEmailMessage('');

    return(
        <div className="main-container">
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitLogin}
            >
                <Form  className='inner-container'>
                    <div className='column-register column-img'>
                        <img src={logo} className='img-login' alt='logo'/>
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
                            <span className='warning-exists'>{emailMessage}</span>
                            <Field
                                className='input-register' 
                                name='email'
                                placeholder='(Ex. email@mail.com...)'
                                onClick={onEmailClick}
                            />
                        </div>

                        <div className='input-container'>
                            <label htmlFor='username'>Username:</label>
                            <ErrorMessage
                                name='username'
                                className='error-message'
                                component='span'
                            />
                            <span className='warning-exists'>{usernameMessage}</span>
                            <Field
                                className='input-register' 
                                name='username'
                                placeholder='(Ex. User123...)'
                                onClick={onUsernameClick}
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
                        <div className='success-registration'>
                            {signMessage}
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