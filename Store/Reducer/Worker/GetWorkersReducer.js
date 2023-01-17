import * as actionTypes from "../../Actions/Actions";

const initialState = {
  Workers: [],
  error: "",
};

const GetWorkersR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetWorkers.GETWORKERS_END:
      return { ...state, Workers: action.data };
    case actionTypes.GetWorkers.GETWORKERS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default GetWorkersR;
