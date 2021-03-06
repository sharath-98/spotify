import { Home } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from './DataLayer';

function Sidebar({spotify}) {
  const [{playlists}, dispatch] = useDataLayerValue();
  const [playlistId, setPlaylistId] = useState("");
  const handlePlaylistChange = (e) =>{
    setPlaylistId(e.currentTarget.attributes.urlPlaylist.value);
  };

  useEffect(()=>{
          dispatch({
            type:'SET_PLAYLIST_ID',
            playlistId: playlistId
      });
      spotify.getPlaylist(playlistId).then((response) => {
            dispatch({
              type:'SET_CLICKED_DETAILS',
              clicked_details: response
            });
        });
  },[playlistId]);

  return (
    <div className='sidebar'>
        <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
        
        <SidebarOption title="Home" Icon="Home" />
        <SidebarOption title="Search" Icon="SearchOutlined" />
        <SidebarOption title="Your Library" Icon="LibraryMusic" />
        <br/>
        <strong className='playlists'>PLAYLISTS</strong>
        <hr/>

        {playlists?.items?.map(playlist => (
          <div onClick={handlePlaylistChange} urlPlaylist={playlist.id} title={playlist.name}>
            <SidebarOption key={playlist.name}  title={playlist.name}/>
          </div>
        ))}

    </div>
  )
}

export default Sidebar