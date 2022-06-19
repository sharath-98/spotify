import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Player from './Player';
import { getTokenFromResponse, loginUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);

  useEffect(()=>{
      const hashToken = getTokenFromResponse();
      window.location.hash='';
      const _token = hashToken.access_token;
      console.log('Token >>> ',_token);

      if(_token) {
          setToken(_token);
          spotify.setAccessToken(_token);
          spotify.getMe().then(user => {
            console.log("Person >>> ", user);
          })
      }

  },[token])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <Fragment>
              {
                token?(<Player/>):(<Login/>)
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
