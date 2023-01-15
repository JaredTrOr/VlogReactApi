import '../styles/Post.css';
import {useNavigate} from 'react-router-dom';

function Post({post, index}){

    const navigate = useNavigate(); //Navigate hook

    return(
        <div 
            className="post" id={index} 
            onClick={() => navigate(`/postInformation/${post.id}`)}
        >
            <div className='post-header'>
                <div className='profile-picture'></div>
                <div className='username'>{post?.username}</div>
            </div>
            <div className='post-body'>
                <div className='post-title'>{post?.title}</div>
                <div className='post-text'>{post?.postText}</div>
            </div>
        </div>
    );
}

export default Post;