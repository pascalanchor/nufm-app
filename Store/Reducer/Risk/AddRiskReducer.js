import * as actionTypes from "../../Actions/Actions";

const initialState = {
  senderId:"",
  facilityParent: "",
  facilitId: "",
  risk: "",
  comment: "",
  error: "",
  loading: false,
};

const AddRiskR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AddRisk.ADD_RISK:
      return { ...state, [action.name]: action.value };

    case actionTypes.AddRisk.ADD_RISK_START:
      return { ...state, loading: true };

    case actionTypes.AddRisk.ADD_RISK_END:
      return { ...state, loading: false, error: "Added Successfully" };

    case actionTypes.AddRisk.ADD_RISK_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default AddRiskR;
