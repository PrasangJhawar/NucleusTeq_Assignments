import React from 'react';


export default function PostList({ posts, onPostClick }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} style={{ margin: '10px 0' }}>
          <button onClick={() => onPostClick(post)} style={{ cursor: 'pointer' }}>
            {post.title}
          </button>
        </li>
      ))}
    </ul>
  );
}

//shows the three buttons of the posts