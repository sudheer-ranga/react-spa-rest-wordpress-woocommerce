import React from 'react';
import Post from './../Post/Post';
import './posts.scss';

function Posts(props) {
  const { posts } = props;

  return posts.map(post => <Post key={post.id} post={post} />);
}

export default Posts;
