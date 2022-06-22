import React from 'react'
import './Song.css'

function Song({track = 'test'}) {
  return (
    <div className='song'>
        <img className='songLogo' src={track.album.images[0].url} alt=''/>
        <div className='songInfo'>
            <h1>{track.name}</h1>
            <p>
                {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                {track.album.name}
            </p>
        </div>
    </div>
  )
}

export default Song