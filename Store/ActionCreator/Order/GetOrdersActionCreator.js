import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getOrders = () => {
  return (dispatch) => {
    // dispatch(getOrdersStart());
    // var token = "Bearer " + localStorage.getItem("nufmtoken");
    // var link = server + privatePath + "/Orders";
    // axios
    //   .get(link, {
    //     headers: {/*'Authorization': token,*/},})
    //   .then((res) => {
    //     dispatch(getOrdersEnd(res.data));
    //   })
    //   .catch((err) => {
    //     dispatch(getOrdersFail(err));
    //   });

    const Orders = [
      { name: "Order1", date: "28-09-2022", sender: "sender", eid: "1" },
      { name: "Order2", date: "28-09-2022", sender: "sender", eid: "2" },
      {
        name: "Order3",
        date: "28-09-2022",
        sender: "sender",
        eid: "3",
      },
      {
        name: "Order4",
        date: "28-09-2022",
        sender: "sender",
        eid: "4",
      },
      {
        name: "Order5",
        date: "28-09-2022",
        sender: "sender",
        eid: "5",
      },
    ];
    dispatch(getOrdersEnd(Orders));
  };
};

export const getOrdersStart = () => {
  return {
    type: actionTypes.GetOrders.GET_ORDERS_START,
  };
};

export const getOrdersFail = (err) => {
  return {
    type: actionTypes.GetOrders.GET_ORDERS_FAIL,
    error: err,
  };
};

export const getOrdersEnd = (data) => {
  return {
    type: actionTypes.GetOrders.GET_ORDERS_END,
    data: data,
  };
};
