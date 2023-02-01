import * as actionTypes from "../../Actions/Actions";

const initialState = {
  email: "",
  fullName: "",
  phone: "",
  notes: "",
  landline:"",
  jobTitle:"",
  profileImage: "",
  loading: false,
  eid: "",
  error: "",
};

const AddFacilityOccupantR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AddFacilityOccupant.ADD_FACILITY_OCC:
      return { ...state, [action.name]: action.value };

    case actionTypes.AddFacilityOccupant.ADD_FACILITY_OCC_START:
      return { ...state, loading: true };

    case actionTypes.AddFacilityOccupant.ADD_FACILITY_OCC_END:
      return {
        ...state,
        loading: false,
        error: "Added Successfully",
      };

    case actionTypes.AddFacilityOccupant.ADD_FACILITY_OCC_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default AddFacilityOccupantR;
