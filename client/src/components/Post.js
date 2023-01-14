import '../styles/Post.css';

function Post({post, index}){
    return(
        <div className="post" id={index}>
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