import React, {useState} from 'react'
import './VideoComponent.css'

function videoComponent() {
  return (
    <div className='videoContainer'>
      <p className='TextTitle2'>Video Gallery</p>
      <div className='Gallery'>
          <div className="Entry">
          <iframe width="1920" height="1080" className='FeaturedVideo' src="https://www.youtube.com/embed/5ywxFnT78sM"/>
          <p>Sincerely Yours, Truly Yours, I'll Go (Official Music Video)</p>
          </div>

          <div className="Entry">
          <iframe width="1920" height="1080" className='FeaturedVideo' src="https://www.youtube.com/embed/ZdGJh9VHlxE"/>
          <p>Your Direction (Official Music Video)</p>
          </div>

          <div className="Entry">
          <iframe width="1920" height="1080" className='FeaturedVideo' src="https://www.youtube.com/embed/EhtTOiJ0UxU"/>
          <p>That's Why I Wrote This Song (Lyric Video)</p>
          </div>

          <div className="Entry">
          <iframe width="1920" height="1080" className='FeaturedVideo' src="https://www.youtube.com/embed/jP8xOcngKN0"/>
          <p>Ania Rako (Lyric Video)</p>
          </div>
      </div>
        
    </div>
  )
}

export default videoComponent