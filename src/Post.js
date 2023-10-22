import React, { useState } from 'react';

const Post = ({ post }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="post">
      <h3>{post.user} said:</h3>
      <p>{post.text}</p>
      <div className="comments">
        <h4>Comments:</h4>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleCommentSubmit}>Submit Comment</button>
      </div>
    </div>
  );
};

export default Post;
