import React from 'react';
import { Link } from 'react-router-dom';
import './post.scss';

function Post(props) {
  const { post } = props;

  return (
    <div className="post-excerpt">
      <h2>
        <Link className="navbar-link" to={`/post/${post.slug}`}>
          {post.title.rendered}
        </Link>
      </h2>
      <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
    </div>
  );
}

export default Post;
