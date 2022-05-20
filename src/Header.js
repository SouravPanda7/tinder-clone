import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum'
function header() {
  return (
    <div className='header'>
      <IconButton>
      <PersonIcon fontSize ="Large" className="header_icon" />
      </IconButton>

    <img 
        className="header_logo" 
        src = "https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-768x432.png"
        alt="tinder-logo"
    />

    <IconButton>
        <ForumIcon fontSize ="Large" />
    </IconButton>

    </div>
  )
}

export default header
