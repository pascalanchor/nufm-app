import * as actionTypes from "../../Actions/Actions";

const initialState = {
  checkInDate:"",
  checkOutDate:"",
  checkInTime:"",
  checkOutTime:"",
  eid:"",
  error: "",
  loading: false,
};

const GetCheckByIdR = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GetCheckById.GET_CHECK_BY_ID_END:
      return {
        ...state,
        checkInDate: action.data.checkInDate,
        checkOutDate:action.data.checkOutDate,
        checkInTime: action.data.checkInTime,
        checkOutTime: action.data.checkOutTime,
        eid: action.data.eid,
        loading: false,
      };

    case actionTypes.GetCheckById.GET_CHECK_BY_ID_END:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default GetCheckByIdR;
