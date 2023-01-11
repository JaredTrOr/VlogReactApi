import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

function App() {  

  const [listOfPosts, setListsOfPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
    .then(response => {
      setListsOfPosts(response.data);
    });
  },[]);

  return (
    <div className="main-container">
      {listOfPosts.map((post) => {
        return <div>{post.title}</div>
      })}
    </div>
  );
}

export default App;
