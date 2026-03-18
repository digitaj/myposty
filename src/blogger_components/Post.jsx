
const Post = ({po}) => {

    return (
        <>
             
                                  <div className="post-preview">
                                    <a href="post.html">
                                    <h2 className="post-title">{po.title}</h2>
                                    <h3 className="post-subtitle">
                                        {po.body}
                                    </h3>
                                    </a>
                                    <p className="post-meta">
                                    Posted by
                                    <a href="#!">{po.userid}</a>
                                    on July 8, 2023
                                    </p>
                                </div>3
                                {/* Divider*/}
                                <hr className="my-4" />   
                        
        </>
    )
}

export default Post