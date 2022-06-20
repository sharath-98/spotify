import { Grid, Slider } from '@material-ui/core';
import { PauseCircleOutlineOutlined, PlayCircleOutlineOutlined, PlaylistPlay, Repeat, Shuffle, ShuffleOutlined, SkipNextOutlined, SkipPreviousOutlined, VolumeDown } from '@material-ui/icons'
import React, { useState } from 'react'
import './Footer.css'

function Footer() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className='footer'>
      <div className='footer_left'>

      </div>

      <div className='footer_middle'>
        <Shuffle className="footer__green" />
        <SkipPreviousOutlined className="footer__icon" />
        {playing ? (
          <PauseCircleOutlineOutlined
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleOutlineOutlined
            fontSize="large"
            className="footer__icon"
          />
        )}
        <SkipNextOutlined className="footer__icon" />
        <Repeat className="footer__green" />
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