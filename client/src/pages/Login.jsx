import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';
import chatPng from '../images/chat.png'
import { useContext, useState } from 'react';
import { UserContext } from '../hooks/UserContext';

function Login(){

    const [usernameMessage, setUsernameMessage] = useState();
    const [passwordMessage, setPasswordMessage] = useState();
    const [loginMessage, setLoginMessage] = useState();

    const {setValue} = useContext(UserContext); //Get the method which exists in this context
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
        console.log(data);
        const {username, password} = data;

        axios.post('http://localhost:3000/login', {
            username,
            password
        }, {withCredentials: true})
        .then(response => {
            if(response.data.success){  
                const user = response.data.user;
                setValue(user); //Set the context of the user
                setLoginMessage('You have logged in succesfully, welcome !!');
                setTimeout(() => {
                    setLoginMessage('');
                    navigate(`/home`);
                },1000);
            }   
            else{
                const message = response.data.msg;
                if(message === 'Incorrect username'){
                    setUsernameMessage(message);
                }
                else{
                    setPasswordMessage(message);
                }
            }
        })
        .catch(err => {
            console.log(err);
        });
    }

    const onClickUsername = () => setUsernameMessage('');
    const onClickPassword = () => setPasswordMessage('');

    return(
        <div className="main-container">
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitLogin}
            >
                <Form  className='inner-container'>
                    <div className='column-register column-img'>
                        <img src={chatPng} alt='react-logo' className='img-login'/>
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
                            <span className='warning-exists'>{usernameMessage}</span>
                            <Field
                                className='input-register' 
                                name='username'
                                placeholder='(Ex. Username...)'
                                onClick={onClickUsername}
                            />
                        </div>
                        <div className='input-container'>
                            <label htmlFor='password'>Password:</label>
                            <ErrorMessage
                                name='password'
                                className='error-message'
                                component='span'
                            />
                            <span className='warning-exists'>{passwordMessage}</span>
                            <Field
                                className='input-register'
                                name='password'
                                placeholder='(Ex. 123...)'
                                onClick={onClickPassword}
                            />
                        </div>
                        <div className='success-registration'>
                            {loginMessage}
                        </div>
                        <div>
                            <button className='button' type='submit'>Login</button>
                        </div>
                        <div>
                            <Link to='/'>Sign up</Link>
                        </div>
                    </div>
                </Form>
            </Formik>

        </div>
    );
}

export default Login;