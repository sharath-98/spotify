import { Favorite, More, MoreHoriz, PlayCircleFilled } from '@material-ui/icons';
import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import Song from './Song';

function Body({spotify}) {
  const [{recent_playlist, discover_weekly}, dispatch] = useDataLayerValue();
  console.log("My recent playlist",recent_playlist)
  return (
    <div className='body'>
      <Header spotify={spotify}/>
      <div className='body_info'>
        <div className="body_text">
        {recent_playlist.length!=0 ? (<h2></h2>) : (<h4>PLAYLISTS</h4>)}
        {recent_playlist.length!=0 ? (<h2>Recently Played</h2>) : (<h2>Discover Weekly</h2>)}
        </div>
        {recent_playlist.length!=0? ( <img src={recent_playlist?.images[0].url}  alt="" />):
        (<img src='https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/dWyHQ4QZxNsDNPzBtyHnoefCyvLpZ5v7BGEZ9PBrPlToFrbxz-vFFj9F5qmraaYCSa2viTDWdxfINVZEXDvyA6EDWSBgeEZsWtIUQgxsaQumtbGGy4iMPwlCDEUxoVhT3FCshBsZ45BG6ZouFl_XguTdhveiIdDvcc-3UOH90RUclhiK6L94Oy2oQLkdgvlbu-nf6GogCpdGABaoKCMas9TlSFLJpjT66qrTcysxLnLsDEURpQprpvFEE4jeaL-KL3u9YI0K6eqW1ccWMmWir_Xh7aW4Wx2c3Xc9eExdDTXVIghPArmjpSHwoxR7ul_jGPy6vU5b_bQ99jn1v7pflVFW5h56hko_HEIghj3mIZAHqaRnMWD4B8wziBUavCT4UUv88xeB2U5sC-ZsWjvQ_ik--4NQpzcjUBioZ4q3ITQ=/OTE6NzE6NDFUODItNDAtMg=='  alt="" />)}
        {<h2>{recent_playlist?.name}</h2>}
        {recent_playlist.length!=0 && <p>By {recent_playlist?.owner.display_name}</p> }
      </div>
      <div className='body_songs'>
        <div className='body_icons'>
          <PlayCircleFilled className='body_play'/>
          <Favorite fontSize='large'/>
          <MoreHoriz/>
        </div>
        
      {
        recent_playlist.length!=0 ? recent_playlist.tracks.items.map(item => (
          <Song track={item.track}/>
        )):discover_weekly?.tracks.items.map(item => (
          <Song track={item.track}/>
        ))
      }
      </div>
    </div>
  )
}

export default Body