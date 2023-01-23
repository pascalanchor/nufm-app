import * as actionTypes from "../../Actions/Actions";

const initialState = {
  facilityParent: "",
  facilitySite: "",
  receiver: "",
  order: "",
  comment:"",
  error: "",
  loading: false,
  eid: "",
};

const AddOrderR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AddOrder.ADD_ORDER:
      return { ...state, [action.name]: action.value };

    case actionTypes.AddOrder.ADD_ORDER_START:
      return { ...state, loading: true };

    case actionTypes.AddOrder.ADD_ORDER_END:
      return {...state,loading: false,error:'Added Successfully'};

    case actionTypes.AddOrder.ADD_ORDER_FAIL:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default AddOrderR;
