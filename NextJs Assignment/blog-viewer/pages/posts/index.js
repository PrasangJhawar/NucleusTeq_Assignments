import { useState } from 'react';
import PostList from '../../components/PostList';
import PostDetail from '../../components/PostDetail';
import React from "react";
export default function PostsPage({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div style={{ padding: '27px', display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
      <h1>Blog Posts</h1>
      <PostList posts={posts} onPostClick={setSelectedPost} />
      {selectedPost && (
        <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/posts');
  const posts = await res.json();

  return {
    props: { posts },
  };
}


//we select and fetch the posts using this very file