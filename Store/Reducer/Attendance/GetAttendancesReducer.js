import * as actionTypes from "../../Actions/Actions";

const initialState = {
  Attendances: [],
  error: "",
};

const GetAttendancesR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetAttendances.GET_ATTENDANCES_END:
      return { ...state, Attendances: action.data };
    case actionTypes.GetAttendances.GET_ATTENDANCES_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default GetAttendancesR;
