import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_SMURF,
  ERROR_MESSAGE,
} from "../actions";

export const initialState = {
  smurfs: [],
  isLoading: false,
  errorMessage: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      console.log("this is fetch start");
      return {
        ...state,
        isLoading: true,
        errorMessage: "",
      };
    case FETCH_SUCCESS:
      console.log("this is fetch success");
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
        errorMessage: "",
      };
    case FETCH_FAIL:
      console.log("this is fetch fail");
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case ADD_SMURF:
      const newSmurf = {
        ...action.payload,
        id: Date.now(),
      };
      return {
        ...state,
        smurfs: [...state.smurfs, newSmurf],
      };
    case ERROR_MESSAGE:
      console.log("this is error message");
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
