import {Link} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import '../styles/CreatePost.css';
import writePostImg from '../images/write-your-post.png';

function CreatePost() {
  return (
    <div className="main-container">
      <div className='create-post-nav'>
        <h1>Create post page</h1>
        <Link to='/'>Go home page</Link>
      </div>

      <div className='create-post-row'>
        <div className='create-post-column'>
          <Formik>
            <Form className='form-post'>
              <div className='input-post'>
                <label for='title'>Username:</label>
                <Field 
                  className='input-create-post' 
                  name='title' 
                  placeholder='(Ex. Username...)'
                />
              </div>
              
              <div className='input-post'>
                <label for='title'>Title:</label>
                <Field 
                  className='input-create-post' 
                  name='title' 
                  placeholder='(Ex. Title...)'
                />
              </div>
              
              <div className='input-post'>
                <label for='title'>Post text:</label>
                <Field 
                  className='input-create-post input-post-text' 
                  name='title' 
                  placeholder='(Ex. Text...)'
                />
              </div>

              <div>
                <button className='submit-post' type='submit'>Create post</button>
              </div>
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