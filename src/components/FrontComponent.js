import React from 'react';
import './FrontComponent.css';
import ArtistImage from '../DANRED_img.jpg';
import ArrowDown from '../arrow-down.png';
import LinksComponent from './LinksComponent';
import '../App.css';
function FrontComponent() {
  return (
    <>
    <div className='frontContainer'>
      <div className = "banner">
        <p>OUT NOW! My EP <a href="https://spoti.fi/3OIsbBV">'Sincerely Yours'</a> on most streaming platforms! 💖</p>
      </div>
        <div className='profileContainer'>
        <img className="profilePic" src={ArtistImage} alt="DANRED profile pic"></img>
        {"\n"}<p className="artistName">DANRED</p>
     </div>
     <LinksComponent/>
     <img className="bounce-out-down arrowdown" src={ArrowDown} alt="arrow down"/>
     </div>
    
     </>

  )
}

export default FrontComponent