export const initialState = {
  user: null, //User data
  top_artists: null,
  item: null, //Current Song
  playing: false,
  playlists: [],
  spotify: null,
  recently_played: [],
  recent_details:[],
  clicked_details:[],
  discover_weekly:null,
  playlistId:"",
  songName:"",
  songArtist:"",
  token: null
  //token:"BQBHFwj_Ikxxgw4RYQvanTAe7fUSnwfZwrdlAqz2TuXMW3b5QI9Mflgowdhs9FkzKS3fO3Nj5fYrAOxqJZmvMyNxw4Y8MN7r7_ZOJ13WXrlysgNA-X-1I4P6zW1V189M_xUHz3SinjHwhsmif1RIzY6DX4xMahyl_o1jE1tHOiCZ3R1HETzVf2IOy70dUXrWZX6K1nhJAq-0lqOGS1A--pV_mu5njclSjze33uCFwndbRP3cl_AnunSt1GHChoSkv57TklhS01DC847tr3R6OeQHltarYAfbGKufrz0V5rgmOeU20PrLvgsExElqlnHLJ7u_GeCrKKJNUA"

};

const reducer = (state, action) => {
    if(action.type==='SET_CLICKED_DETAILS')
    {
      console.log(action.type," >>> ",action.clicked_details);
    }  
    const res=[];
    if(action.type === 'SET_RECENT_ID' && action.recently_played.items[0]){
      res.push(action.recently_played.items[0]?.context.uri.split(':')[2]);
    }
    switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      case "SET_RECENT_ID":
      return {
        ...state,
        recently_played: res[0],
      };
      case "SET_RECENT_DETAILS":
      return {
        ...state,
        recent_details: action.recent_details,
      };
      case "SET_CLICKED_DETAILS":
      return {
        ...state,
        clicked_details: action.clicked_details,
      };
      case "SET_PLAYLIST_ID":
      return {
        ...state,
        playlistId: action.playlistId,
      };
      case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
      case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
      case "SET_SONG_DETAILS":
      return {
        ...state,
        songName: action.songName,
        songArtist: action.songArtist,
      };
      default:
        return state;
    }  
}

export default reducer;