import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import CommentCreate from './CommentCreate';

export default () => {
  const [posts, setPosts] = useState({});

  // Async functions returns promises
  // Await until get the result
  const fetchPosts = async () => {
    const res = await Axios.get('http://localhost:4000/posts');

    setPosts(res.data);
  };

  //Guarantee that fetchPosts will only run after our component first displayed on the screen.
  //The empty array guarantee the the function will run only one time
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: '30%', marginBottom: '20px' }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
