import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Post from './components/Post';
import Navbar from './components/Navbar';

function App() {  

  const [listOfPosts, setListsOfPosts] = useState([]);

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
        {listOfPosts.map((post,index) => {
          return <Post post={post} index={index} key={index}/>
        })}
      </div>
    </>
    
  );
}

export default App;
