import * as actionTypes from "../../Actions/Actions";

const initialState = {
  Orders: [],
  error: "",
};

const GetOrdersR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetOrders.GET_ORDERS_END:
      return { ...state, Orders: action.data };
    case actionTypes.GetOrders.GET_ORDERS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default GetOrdersR;
