export const initialState = {
  user: null, //User data
  top_artists: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  item: null, //Current Song
  playing: false,
};

const reducer = (state, action) => {
    console.log("ACTION >>> ",action);  
    switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      default:
        return state;
    }  
}

export default reducer;