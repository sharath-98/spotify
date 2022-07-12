import { Grid, Slider } from '@material-ui/core';
import { FavoriteBorderOutlined, Mic, MicTwoTone, PauseCircleOutlineOutlined, PlayCircleOutlineOutlined, PlaylistPlay, Repeat, Shuffle, ShuffleOutlined, SkipNextOutlined, SkipPreviousOutlined, SpeakerGroup, SpeakerGroupOutlined, VolumeDown } from '@material-ui/icons'
import React, { useState } from 'react'
import { useDataLayerValue } from './DataLayer';
import './Footer.css'

function Footer() {
  const [playing, setPlaying] = useState(false);
  const [{recent_details, discover_weekly, songName, songArtist}, dispatch] = useDataLayerValue();
  return (
    <div className='footer'>
      <div className='footer_left'>
        {recent_details.length!=0? ( <img className='songLogo' src={recent_details?.images[0].url}  alt="" />):
          (<img className='songLogo' src='https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/dWyHQ4QZxNsDNPzBtyHnoefCyvLpZ5v7BGEZ9PBrPlToFrbxz-vFFj9F5qmraaYCSa2viTDWdxfINVZEXDvyA6EDWSBgeEZsWtIUQgxsaQumtbGGy4iMPwlCDEUxoVhT3FCshBsZ45BG6ZouFl_XguTdhveiIdDvcc-3UOH90RUclhiK6L94Oy2oQLkdgvlbu-nf6GogCpdGABaoKCMas9TlSFLJpjT66qrTcysxLnLsDEURpQprpvFEE4jeaL-KL3u9YI0K6eqW1ccWMmWir_Xh7aW4Wx2c3Xc9eExdDTXVIghPArmjpSHwoxR7ul_jGPy6vU5b_bQ99jn1v7pflVFW5h56hko_HEIghj3mIZAHqaRnMWD4B8wziBUavCT4UUv88xeB2U5sC-ZsWjvQ_ik--4NQpzcjUBioZ4q3ITQ=/OTE6NzE6NDFUODItNDAtMg=='  alt="" />)}
          <div className='footerSong'>
          <h4>{songName?songName: discover_weekly?.tracks.items[0].track.name}</h4>
          <p>{songArtist?songArtist: discover_weekly?.tracks.items[0].track.artists[0].name}</p>
        </div>
        <FavoriteBorderOutlined/>
      </div>

      <div className='footer_middle'>
        <Shuffle className="footer_color" />
        <SkipPreviousOutlined className="footer_icon" />
        {playing ? (
          <PauseCircleOutlineOutlined
            fontSize="large"
            className="footer_icon"
          />
        ) : (
          <PlayCircleOutlineOutlined
            fontSize="large"
            className="footer_icon"
          />
        )}
        <SkipNextOutlined className="footer_icon" />
        <Repeat className="footer_color" />
      </div>
      <div className='footer_right'>
        <Grid container spacing={2}>
          <Grid item>
            <MicTwoTone />
          </Grid>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <SpeakerGroupOutlined />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer