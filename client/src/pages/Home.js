import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../components/Navbar'
import Post from '../components/Post';
import { UserContext } from '../hooks/UserContext';

function Home() {

    const [listOfPosts, setListsOfPosts] = useState([]);
    const {value, setValue} = useContext(UserContext);

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then(response => {
        setListsOfPosts(response.data);
        });
    },[]);

    return (
      <>
        <Navbar/>
        <div className="main-container">
          <h1>This is my user: {value.name}</h1>
          <span>
            <Link to='/createPost'>Create post</Link>
          </span>
          {listOfPosts.map((post,index) => {
            return <Post post={post} index={index} key={index}/>
          })}
      </div>
    </>
    );
}

export default Home;