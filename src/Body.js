import React from 'react'
import './Body.css'
import Header from './Header'

function Body({spotify}) {
  return (
    <div className='body'>
      <Header spotify={spotify}/>
      <div className='body_info'>
        <img src={process.env.PUBLIC_URL + 'images/discover.jpeg'}  alt="" />
        <div className="body_text">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>desc</p>
        </div>
      </div>
    </div>
  )
}

export default Body