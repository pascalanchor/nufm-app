import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getOrderDetails = (eid) => {
  return (dispatch) => {
    // var token = "Bearer " + localStorage.getItem("nufmtoken");
    var link = server + privatePath + "/order/details/" + eid;

    axios
      .get(link, {
        headers: {
          /*Authorization: token*/
        },
      })
      .then((res) => {
        if (res.data.message === "expectation failed") {
          dispatch(getOrderDetailsFail("expectation failed"));
        } else {
          dispatch(getOrderDetailsEnd(res.data));
        }
      })
      .catch((err) => {
        dispatch(getOrderDetailsFail(err));
      });
  };
};

export const getOrderDetailsEnd = (data) => {
  return {
    type: actionTypes.GetOrderDetails.GET_ORDER_DETAILS_END,
    data: data,
  };
};

export const getOrderDetailsFail = (err) => {
  return {
    type: actionTypes.GetOrderDetails.GET_ORDER_DETAILS_END,
    error: err,
  };
};
