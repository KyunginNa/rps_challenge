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
    case "PLAYER_TWO_PICK":
      return {
        ...state,
        playerTwoPick: action.payload,
      };
    case "PLAYER_TWO_GO":
      if (action.payload.score === 1) {
        return {
          ...state,
          playerTwoGoBtn: true,
          playerOneVisible: true,
          resultMessage: action.payload.message,
          playerOneScore: state.playerOneScore + 1,
        };
      } else if (action.payload.score === 2) {
        return {
          ...state,
          playerTwoGoBtn: true,
          playerOneVisible: true,
          resultMessage: action.payload.message,
          playerTwoScore: state.playerTwoScore + 1,
        };
      } else {
        return {
          ...state,
          playerTwoGoBtn: true,
          playerOneVisible: true,
          resultMessage: action.payload.message,
        };
      }
      break;
    case "PLAYER_TWO_RANDOM":
      if (action.payload.score === 1) {
        return {
          ...state,
          playerTwoPick: action.payload.playerTwoPick,
          playerTwoGoBtn: true,
          playerOneVisible: true,
          resultMessage: action.payload.message,
          playerOneScore: state.playerOneScore + 1,
        };
      } else if (action.payload.score === 2) {
        return {
          ...state,
          playerTwoPick: action.payload.playerTwoPick,
          playerTwoGoBtn: true,
          playerOneVisible: true,
          resultMessage: action.payload.message,
          playerTwoScore: state.playerTwoScore + 1,
        };
      } else {
        return {
          ...state,
          playerTwoPick: action.payload.playerTwoPick,
          playerTwoGoBtn: true,
          playerOneVisible: true,
          resultMessage: action.payload.message,
        };
      }
      break;
    case "PLAY_AGAIN":
      return {
        ...initialState,
        playerOneScore: state.playerOneScore,
        playerTwoScore: state.playerTwoScore,
      };
    case "RESTART":
      return initialState;
    default:
      return state;
  }
};

export default rootReducer;
