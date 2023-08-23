import React from 'react'
import './Featured.css';
function Featured() {
  return (
    <div className='Container'>
    <p className='TextTitle'>Featured</p>
    <p className="TextTitle2">Sincerely Yours, Truly Yours, I'll Go (Official Music Video)</p>
    <iframe className='FeaturedVideo'
    src="https://www.youtube.com/embed/5ywxFnT78sM">
    </iframe>
    </div>
  )
}

export default Featured