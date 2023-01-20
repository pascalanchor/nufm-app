import * as actionTypes from "../../Actions/Actions";

const initialState = {
  parentId:"",
  name:"",
  type:"",
  location:"",
  sqm:"",
  const_year:"",
  date_opened:"",
  street:"",
  post_code:"",
  numberOfWorker:"",
  creationDate:"",
  occupants:"",
  createdAt:"",
  parent:"",
  description:"",
  primaryEmail:[],
  workSchedule:[],
  loading: false,
  eid: "",
  error:""
};

const AddFacilityR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AddFacility.ADD_FACILITY:
      return { ...state, [action.name]: action.value };

    case actionTypes.AddFacility.ADD_FACILITY_START:
      return { ...state, loading: true };

    case actionTypes.AddFacility.ADD_FACILITY_END:
      return {
        ...state,
        loading: false,
        eid: action.data.eid,
        error:"Added Successfully"
      };

    case actionTypes.AddFacility.ADD_FACILITY_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default AddFacilityR;
