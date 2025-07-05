import React from "react";
export default function handler(req, res) {
  res.status(200).json([
    { id: 1, title: 'First Post', content: "Hi, I'm Prasang, this is my first blog" },
    { id: 2, title: 'Second Post', content: 'This is my second one' },
    { id: 3, title: 'Third Post', content: 'Third and last, I retire' },
  ]);
}

//this file  is used to return the json of blog posts, route localhost:3000/pages/api