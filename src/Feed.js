import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Post from './Post';

function Feed() {
  const user = useSelector((state) => state.user);
  const posts = [
    {
      id: 1,
      user: 'User1',
      text: 'This is the first post.',
    },
    {
      id: 2,
      user: 'User2',
      text: 'Hello from User2!',
    },
    // Add more posts here
  ];

  return (
    <div className="feed">
      <h2>Welcome, {user.name}!</h2> {/* Display user information */}
      {posts.map((post) => (
        <div key={post.id} className="post">
          {post.text}
        </div>
      ))}
    </div>
  );
}

export default Feed;
