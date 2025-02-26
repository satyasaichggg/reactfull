import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home  from './pages/Home';
import About  from './pages/About';
import Blog from'./pages/Blog';
import BlogDetails from './pages/BlogDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './pages/Contact';
import Error404 from '/workspaces/reactfull/routingproject/src/pages/Error404.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

let allroutes=createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/About',
      element:<About/>
    },
    {
      path:'contact',
      element:<Contact/>
    },
    {
      path:'blog',
      element:<Blog/>
    },
    {
      path:'blog/:id',
      element:<BlogDetails/>
    },
    {
      path:'*',
      element:<Error404/>
    }

  ]
)

root.render(
  <React.StrictMode>
   <RouterProvider router={allroutes}/>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
