import React from 'react'
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from './Search';

function Home() {
  return (
    <div className='home'>
      {/* <h1>This is Home Page</h1> */}
      <div className="home__header">
        <div className="home__headerLeft">
          {/* link About */}
            <Link to='/about'>About</Link>
          {/* Link Store */}
          <Link to='/store'>Store</Link>
        </div>

        <div className="home__headerRight">
          {/* link gmail */}
          <Link to='/gmail'>Gmail</Link>
          {/* Link Images */}
          <Link to='/images'>Images</Link>
          {/* Icon */}
          <AppsIcon/>
          {/* Avatar */}
          <Avatar></Avatar>
        </div>

      </div>

      <div className="home__body">

      <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png" width={400}  alt="nope" />

      <div className="home__inputContainer">
        <Search></Search>
      </div>
      </div>
      
    </div>
  )
}

export default Home
