import axios from "axios";

//action type
export const FETCH_SMURFS = "FETCH_SMURFS";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR_MESSAGE = "ERROR_MESSAGE";

//action creators
export function fetchSmurfs() {
  return function (dispatch) {
    dispatch(fetchStart());
    return axios
      .get("http://localhost:3333/smurfs")
      .then(({ data }) => {
        console.log(data);
        dispatch(fetchSuccess(data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchFail(err));
      });
  };
}

//actions
export const fetchStart = () => {
  return { type: FETCH_START };
};

export const fetchSuccess = (data) => {
  return { type: FETCH_SUCCESS, payload: data };
};

export const fetchFail = (error) => {
  return { type: FETCH_FAIL, payload: error };
};

export const addSmurf = (data) => {
  return { type: ADD_SMURF, payload: data };
};

export const errorMessage = (error) => {
  return { type: ERROR_MESSAGE, payload: error };
};

// --------------------------------------------------------------------------------------------------------------
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
