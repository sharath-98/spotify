import { Grid, Slider } from '@material-ui/core';
import { PauseCircleOutlineOutlined, PlayCircleOutlineOutlined, PlaylistPlay, Repeat, Shuffle, ShuffleOutlined, SkipNextOutlined, SkipPreviousOutlined, VolumeDown } from '@material-ui/icons'
import React, { useState } from 'react'
import './Footer.css'

function Footer() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img className='songLogo' src=''/>
        <div className='footerSong'>
          <h4>Hurray</h4>
          <p>My songs</p>
        </div>
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
            <PlaylistPlay />
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