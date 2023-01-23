import {useParams} from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { UserContext } from '../hooks/UserContext';

function PostInfo(){

    const [postObject, setPostObject] = useState({});
    const {id} = useParams();
    const {value} = useContext(UserContext); 
    
    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
        .then(response => {
            setPostObject(response.data);
        })
        .catch(err => console.log(err));
    },[]);

    return(
    <div className='main-container'>
        {postObject.title}
    </div>
    );
}

export default PostInfo;