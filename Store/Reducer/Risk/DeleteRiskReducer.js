import * as actionTypes from "../../Actions/Actions";

const initialState = {
  error: "",
  deleteRsk: false,
  eid: "",
};

const DeleteRiskR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DeleteRisk.DELETE_RISK_INFO:
            return { ...state, [action.name] : action.value  }
    case actionTypes.DeleteRisk.DELETE_RISK_END:
      return { ...state, deleteRsk: true };
    case actionTypes.DeleteRisk.DELETE_RISK_FAIL:
      return { ...state, error: action.error, deleteRsk: false };
    default:
      return state;
  }
};

export default DeleteRiskR;
