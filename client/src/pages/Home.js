import axios from 'axios';
import {useEffect, useState} from 'react';
import Post from '../components/Post';
import {Link} from 'react-router-dom';

function Home() {

    const [listOfPosts, setListsOfPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/posts')
        .then(response => {
        setListsOfPosts(response.data);
        });
    },[]);

    return (
      <div className="main-container">
        <Link to='/createPost'>Create post</Link>
        {listOfPosts.map((post,index) => {
          return <Post post={post} index={index} key={index}/>
        })}
    </div>
    );
}

export default Home;