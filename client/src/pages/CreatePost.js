import {Link} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import '../styles/CreatePost.css';
import writePostImg from '../images/write-your-post.png';
import * as Yup from 'yup';
import axios from 'axios';
import {useState} from 'react';

function CreatePost() {
  const [successMessage, setSuccessMessage] = useState('');

  const initialValues = {
    username: '',
    title: '',
    postText: ''
  };

  const validationScheme = Yup.object().shape({
    username: Yup.string().required(),
    title: Yup.string().required(),
    postText: Yup.string()
  });

  const onSubmitPost = async (data) => {
    const {username, title, postText} = data;

    try{
      await axios.post('http://localhost:3000/posts', {
        title, 
        postText,
        username
      });
      console.log('Post created');
      setSuccessMessage('The post was created succesfully!!');
      setTimeout(() => {
        setSuccessMessage('');
      },2000);
    }
    catch(err){
      console.log(err);
    }
    
  }

  return (
    <div className="main-container">
      <div className='create-post-nav'>
        <h1>Create post page</h1>
        <Link to='/'>Go home page</Link>
      </div>

      <div className='create-post-row'>
        <div className='create-post-column'>
          <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmitPost}
            validationSchema={validationScheme}
            >

            <Form className='form-post'>
              <div className='input-post'>
                <label htmlFor='username'>Username:</label>
                <ErrorMessage 
                  name='username' 
                  component='span'
                  className='error-message'
                />
                <Field 
                  className='input-create-post' 
                  name='username' 
                  placeholder='(Ex. Username...)'
                />
              </div>
              
              <div className='input-post'>
                <label htmlFor='title'>Title:</label>
                <ErrorMessage 
                  name='title' 
                  component='span'
                  className='error-message'
                />
                <Field 
                  className='input-create-post' 
                  name='title' 
                  placeholder='(Ex. Title...)'
                />
              </div>
              
              <div className='input-post'>
                <label htmlFor='post-text'>Post text:</label>
                <ErrorMessage name='post-text' component='span'/>
                <Field 
                  className='input-create-post' 
                  name='postText' 
                  placeholder='(Ex. Text...)'
                />
              </div>

              <div>
                <button className='submit-post' type='submit'>Create post</button>
              </div>

              <div>{successMessage}</div>
            </Form>
          </Formik>
        </div>

        <div className='create-post-column'>
          <img src={writePostImg}/>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;