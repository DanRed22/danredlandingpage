import React from 'react'
import './LinksComponent.css'

function LinksComponent() {
  return (
    <div className="LinksComponentContainer">
        <a href="https://www.youtube.com/@danredgelo"> <button className='youtube-button'>YouTube</button></a>
        <a href="https://open.spotify.com/artist/6xhEZbF2ffnH7gCfFmhRjm?si=9634e811cefa4186"> <button className='spotify-button'>Spotify</button></a>
        <a href="https://instagram.com/1danred"> <button className='instagram-button'>Instagram</button></a>
        <a href="https://tiktok.com/@geloudanred"> <button className='tiktok-button'>TikTok</button></a>
    </div>
  )
}

export default LinksComponent