import initialState from "../store/initialState";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLAYER_ONE_PICK":
      return {
        ...state,
        playerOnePick: action.payload,
      };

    case "PLAYER_ONE_GO":
      return {
        ...state,
        playerOneGoBtn: true,
        playerOneVisible: false,
      };

    case "PLAYER_ONE_RANDOM_PICK":
      return {
        ...state,
        playerOnePick: action.payload,
        playerOneGoBtn: true,
        playerOneVisible: false,
      };

    default:
      return state;
  }
};

export default rootReducer;
