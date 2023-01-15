import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

function PostInfo(){

    const [postObject, setPostObject] = useState({});
    const {id} = useParams();
    
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