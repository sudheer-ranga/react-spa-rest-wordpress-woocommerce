import React, { useState, useEffect } from 'react';
import Posts from '../../components/Posts/Posts';
import axios from 'axios';
import Config from '../../config';
import './index.scss';

function IndexPage() {
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios.get(Config.ROOT_URL + '/posts').then(posts => {
      setLoading(false);
      setPosts(posts.data);
    });
  }, []);

  return (
    <React.Fragment>
      {!isLoading && posts.length > 0 ? (
        <Posts posts={posts} />
      ) : (
        'Loading posts...'
      )}
    </React.Fragment>
  );
}

export default IndexPage;
