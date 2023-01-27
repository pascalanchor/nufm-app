import * as actionTypes from "../../Actions/Actions";

const initialState = {
  error: "",
  deleteOrd: false,
  eid: "",
};

const DeleteOrderR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DeleteOrder.DELETE_ORDER_INFO:
      return { ...state, [action.name]: action.value };
    case actionTypes.DeleteOrder.DELETE_ORDER_END:
      return { ...state, deleteOrd: true };
    case actionTypes.DeleteOrder.DELETE_ORDER_FAIL:
      return { ...state, error: action.error, deleteOrd: false };
    default:
      return state;
  }
};

export default DeleteOrderR;
