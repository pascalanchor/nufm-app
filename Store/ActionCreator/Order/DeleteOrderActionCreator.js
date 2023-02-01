import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const deleteOrderInfo = (name, value) => {
  return {
    type: actionTypes.DeleteOrder.DELETE_ORDER_INFO,
    name: name,
    value: value,
  };
};

export const deleteOrder = (eid) => {
  return (dispatch) => {
    // var token = 'Bearer '+localStorage.getItem('nufmtoken');
    var link = server + privatePath + "/order/delete/" + eid;
console.log(link);
    axios
      .delete(link, {
        headers: {
          /*'Authorization': token*/
        },
      })
      .then((res) => {
        console.log(res.data)
        dispatch(deleteOrderEnd(res.data));
      })
      .catch((err) => {
        console.log(err)

        dispatch(deleteOrderFail(err));
      });
  };
};

export const deleteOrderEnd = (data) => {
  return {
    type: actionTypes.DeleteOrder.DELETE_ORDER_END,
    data: data,
  };
};

export const deleteOrderFail = (err) => {
  return {
    type: actionTypes.DeleteOrder.DELETE_ORDER_FAIL,
    error: err,
  };
};
