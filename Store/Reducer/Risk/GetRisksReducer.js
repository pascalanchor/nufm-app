import * as actionTypes from "../../Actions/Actions";

const initialState = {
  Risks: [],
  error: "",
};

const GetRisksR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetRisks.GET_RISKS_END:
      return { ...state, Risks: action.data };
    case actionTypes.GetRisks.GET_RISKS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default GetRisksR;
