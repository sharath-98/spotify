import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromResponse, loginUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer';

var spotify = new SpotifyWebApi();



function App() {

  const [{user, token, recent_details, recently_played, playlistId}, dispatch] = useDataLayerValue();

  useEffect(()=>{
      const hashToken = getTokenFromResponse();
      window.location.hash='';
      const _token = hashToken.access_token;
      //console.log('Token >>> ',_token);
      //BQDw8U76oqt9fOSmjlPADBAJpM0Ham1NP1S17bjicwzoutDs55Ig5sGG085ov7d_dLxDDEcF8h7XnvXXY8D8EH8G5dHqHAMqynaaMOGeGPQVXlX2xpbU9heVgHk9m

      if(_token) {
          dispatch({
            type:'SET_TOKEN',
            token:_token
          });
          spotify.setAccessToken(_token);
          
          spotify.getUserPlaylists().then((playlists) => {
            dispatch({
              type:'SET_PLAYLISTS',
              playlists:playlists
            });
          });



          
          spotify.getMe().then(user => {
            dispatch({
              type:'SET_USER',
              user:user
            });
          });


          spotify.getMyRecentlyPlayedTracks().then(recentPlaylists => {
            dispatch({
              type:'SET_RECENT_ID',
              recently_played: recentPlaylists
            });
          });

          spotify.getPlaylist('4PT40u0uEKWWaCxfc2jcGE').then(response =>{
          dispatch({
            type:'SET_DISCOVER_WEEKLY',
            discover_weekly: response
          });
        });

        if(playlistId!=="")
        {
          console.log("im here>>>", playlistId)
          spotify.getPlaylist(playlistId).then((response) => {
            dispatch({
              type:'SET_RECENT_DETAILS',
              recent_details: response
            });
        });
        }

      }
      

  },[playlistId, recent_details, recently_played, user]);
    spotify.getPlaylist(recently_played).then(response=>{
          dispatch({
            type:'SET_RECENT_DETAILS',
            recent_details: response
          });
        });
    
    
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <Fragment>
              {
                token?(<Player spotify={spotify} />):(<Login/>)
              }
            </Fragment>
          }>
            </Route>
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
