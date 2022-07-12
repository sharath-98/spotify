import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import './Player.css'
import Footer from './Footer'

function Player({spotify}) {
  return (
    <div className='player'>
      <div className='playerMain'>
        <Sidebar className='playerMain_Sidebar' spotify={spotify}/>
        <Body className='playerMain_Body' spotify={spotify}/>
      </div>
      <div className='player_footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default Player