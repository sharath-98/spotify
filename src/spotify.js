
export const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "a3bb563e6c024485b22280b86a53dd2e";
const redirectUri = "https://spotify-web-app-86451.web.app/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash.substring(1).split("&").reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20")}&response_type=token&show_dialog=true`;