import React from 'react'
import blogs from '/workspaces/reactfull/routingproject/src/Data/blogs.jsx'
import Header from '/workspaces/reactfull/routingproject/src/common/Header.jsx'
import {Link} from 'react-router-dom'
export default function Blog(){
    let allBlogs=blogs.map((v,i)=>{
      return(
        <div className='blogItems' key={i}>
            <h3>{v.title}</h3>
          <p>
            {v.body}
            
          </p>
          <button><Link to={`/blog/${v.id}`}>read more</Link></button>
 </div>
      )
    })

    return(
        <div>
           <Header/> 
           <h1>Blog page</h1>
           <div className='container'>
              {allBlogs}
           </div>
             </div>
    )
}