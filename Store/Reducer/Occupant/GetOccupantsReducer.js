import * as actionTypes from "../../Actions/Actions";

const initialState = {
  Occupants: [],
  error: "",
};

const GetOccupantsR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetOccupants.GETOCCUPANTS_END:
      return { ...state, Occupants: action.data };
    case actionTypes.GetOccupants.GETOCCUPANTS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default GetOccupantsR;
