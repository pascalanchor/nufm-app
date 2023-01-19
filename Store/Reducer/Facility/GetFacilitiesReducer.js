import * as actionTypes from "../../Actions/Actions";

const initialState = {
  Facilities: [],
  error: "",
};

const GetFacilitiesR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetFacilities.GET_FACILITIES_END:
      return { ...state, Facilities: action.data };
    case actionTypes.GetFacilities.GET_FACILITIES_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default GetFacilitiesR;
