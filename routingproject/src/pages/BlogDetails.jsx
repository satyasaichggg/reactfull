import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '/workspaces/reactfull/routingproject/src/common/Header.jsx';
import blogs from '/workspaces/reactfull/routingproject/src/Data/blogs.jsx';

export default function BlogDetails() {
  let location = useLocation();
  let currentId = Number(location.pathname.split('/')[2]); // Ensure ID is a number
  let currentdata = blogs.find((v) => v.id === currentId); // Use find() instead of filter()[0]


  return (
    <div>
      <Header />
      <h1>{currentdata.title}</h1>
      <p>{currentdata.content}</p> {/* Assuming `blogs` has `content` */}
    </div>
  );
}
