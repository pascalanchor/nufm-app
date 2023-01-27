import * as actionTypes from "../../Actions/Actions";

const initialState = {
  sender: "",
  facility: "",
  task: "",
  risk: "",
  comment: "",
  id: "",
  error: "",
  loading: false,
};

const GetRiskDetailsR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetRiskDetails.GET_RISK_DETAILS_END:
      return {
        ...state,
        sender: action.data.sender,
        facility: action.data.facility,
        task: action.data.task,
        risk: action.data.risk,
        comment: action.data.comment,
        id: action.data.id,
        loading: false,
      };

    case actionTypes.GetRiskDetails.GET_RISK_DETAILS_END:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default GetRiskDetailsR;
