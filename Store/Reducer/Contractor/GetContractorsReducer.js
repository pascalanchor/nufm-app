import * as actionTypes from "../../Actions/Actions";

const initialState = {
  Contractors: [],
  email: "",
  fullName: "",
  profileImage: "",
  phone: "",
  creationDate: "",
  specialization: [],
  loading: false,
};

const GetContractorsR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetContractors.GETCONTRACTORS_END:
      return { ...state, Contractors: action.contractorInfo };
    case actionTypes.GetContractors.GETCONTRACTORS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default GetContractorsR;
