import * as actionTypes from "../../Actions/Actions";

const initialState = {
  sender: "",
  site: "",
  email: "",
  phone: "",
  facilityParent: "",
  date: "",
  order:"",
  comment:"",
  eid: "",
  error: "",
  loading: false,
};

const GetOrderDetailsR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetOrderDetails.GET_ORDER_DETAILS_END:
      return {
        ...state,
        sender: action.data.sender,
        site: action.data.site,
        email: action.data.email,
        phone: action.data.phone,
        facilityParent: action.data.facilityParent,
        date: action.data.date,
        order: action.data.order,
        comment: action.data.comment,
        eid: action.data.eid,
        loading: false,
      };

    case actionTypes.GetOrderDetails.GET_ORDER_DETAILS_END:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default GetOrderDetailsR;
