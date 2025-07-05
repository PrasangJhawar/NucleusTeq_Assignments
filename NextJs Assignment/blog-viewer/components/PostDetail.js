import React from 'react';


export default function PostDetail({ post, onClose }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '50px' }}>
      <button onClick={onClose} style={{marginBottom: "10px", cursor: 'pointer'}}>
        X
      </button>
      <div style={{margin: "40px"}}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  );
}


