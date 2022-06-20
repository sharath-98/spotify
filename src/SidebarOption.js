import React from 'react'
import { Home, LibraryMusic, SearchOutlined } from '@material-ui/icons'
import './SidebarOption.css'

function SidebarOption({Icon, title}) {
  return (
    <div className='sidebarOption'>
        {Icon && <Icon className='sidebarIcon'/>}
        { Icon ? <h4>{title}</h4>:<p>{title}</p>}
        
    </div>
  )
}

export default SidebarOption