import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
export default function Header(){
    return(
        <div>
            <h1> Header part</h1>
            <nav>
                <ul>
                    <li> <Link to={'/'}>Home</Link></li>
                    <li> <Link to={'/About'}>About</Link></li>
                    <li> <Link to={'/Contact'}>Contact</Link></li>
                    <li> <Link to={'/Blog'}>Blog</Link></li>
                </ul>
            </nav>
        </div>
    )
}