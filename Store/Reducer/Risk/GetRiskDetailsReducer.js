import * as actionTypes from "../../Actions/Actions";

const initialState = {
  sender: "",
  site: "",
  facility: "",
  task: "",
  risk: "",
  note: "",
  eid: "",
  error: "",
  loading: false,
};

const GetRiskDetailsR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetRiskDetails.GET_RISK_DETAILS_END:
      return {
        ...state,
        sender: action.data.sender,
        site: action.data.site,
        facility: action.data.facility,
        task: action.data.task,
        risk: action.data.risk,
        note: action.data.note,
        eid: action.data.eid,
        loading: false,
      };

    case actionTypes.GetRiskDetails.GET_RISK_DETAILS_END:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default GetRiskDetailsR;
