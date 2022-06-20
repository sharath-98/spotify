export const initialState = {
  user: null, //User data
  top_artists: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  item: null, //Current Song
  playing: false,
  token: "BQBQRjeiC6q0WENFGyDeC4O16GVUYZRJdi-VLTnkoGFsCWVP0pHgOei8ArV2JGP1f-V6BFpJJXh8Y4IyKQc8FZxJA_RTG_YtnZRZwp63RsG9pnLjbWYXmVTs0qhID8ynJokeTL6k6XM-_2uvboUnAWNzYeMZjGj6PPqJosSDSkBMzYR55APy8NxfPrmPj_jBUlF11ShMNibwGeR3UeQAfOqfEEa8aw9u3MhqXLLwxTdF0mbvYFF9juVMcjbwiRZ6slk7wK1bFJRJph1Dm86At9swApkZdj_dSTPzv_cj5OMI2sDwkvR4vJB7yzV27Ir3duj-8Wc8mWtgoA"
};

const reducer = (state, action) => {
    console.log("ACTION >>> ",action);  
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
      default:
        return state;
    }  
}

export default reducer;