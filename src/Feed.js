import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from './slices/userSlice'
import Post from './Post';

function Feed() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

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

  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch the action to log the user out
    navigate('/login')
  };

  return (
    <div className="feed">
      {user ? (
        <div>
          <h2>Welcome, {user.name ? user.name : 'User'}!</h2>
          {/* Display user information */}
        </div>
      ) : (
        <h2>Welcome!</h2>
      )}

      {
        posts.map((post) => (
          <div key={post.id} className="post">
            {post.text}
          </div>
        ))
      }

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}



export default Feed;
