import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Config from './../../config';
import './post-detail.scss';

function PostDetail(props) {
  const { slug } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${Config.ROOT_URL}/posts?slug=${slug}`).then(post => {
      setIsLoading(false);
      setPost(post.data[0]);
    });
  }, [slug]);

  // check if post variable is set and then build the dom
  const postDom = post && (
    <div className="post-detail-wrapper">
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );

  // if not loading and if post is set display the post, else show loading
  return !isLoading && post ? postDom : 'Loading ...';
}

export default PostDetail;
