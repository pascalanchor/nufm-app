import * as actionTypes from "../../Actions/Actions";

const initialState = {
  spec: [],
  error: "",
};

const GetSpecializationR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetSpecialization.GET_SPECIALIZATION_END:
      return { ...state, spec: action.spec };
    case actionTypes.GetSpecialization.GET_SPECIALIZATION_FAIL:
      return { ...state, error: action.error};
    default:
      return state;
  }
};

export default GetSpecializationR;
