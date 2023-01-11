function Post({post, index}){
    return(
        <div className="post" id={index}>
            <div>{post?.username}</div><div>{post.title}</div>
            <div>{post?.title}</div>
            <div>{post?.postText}</div>
        </div>
    );
}

export default Post;