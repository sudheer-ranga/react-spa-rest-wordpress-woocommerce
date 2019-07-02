import React from 'react';
import PostDetail from './../../components/PostDetail/PostDetail';
import './post-detail-page.scss';

function PostDetailPage(props) {
  return <PostDetail slug={props.match.params.slug} />;
}

export default PostDetailPage;
