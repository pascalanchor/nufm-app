import * as actionTypes from "../../Actions/Actions";

const initialState = {
  sender: "",
  receiver: "",
  email: "",
  status: "",
  phoneNumber: "",
  facility: "",
  date: "",
  orderContent: "",
  comment: "",
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
        receiver: action.data.receiver,
        email: action.data.email,
        status: action.data.status,
        phoneNumber: action.data.phoneNumber,
        facility: action.data.facility,
        date: action.data.date,
        orderContent: action.data.orderContent,
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
