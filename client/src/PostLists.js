import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default () => {
  const [posts, setPosts] = useState({});

  // Async functions returns promises
  // Await until get the result
  const fetchPosts = async () => {
    const res = await Axios.get('http://localhost:4000/posts');

    setPosts(res.data);
  };

  //Guarantee that fetchPosts will only run after our component first displayed
  //on the screen
  useEffect(() => {
    fetchPosts();
  }, []);

  return <div />;
};
