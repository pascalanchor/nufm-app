import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getOrders = () => {
  return (dispatch) => {
    // dispatch(getOrdersStart());
    // var token = "Bearer " + localStorage.getItem("nufmtoken");
    // var link = server + privatePath + "/orders";
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
      {
        sender: { fullName: "Jana Zreika", nb: "2" },
        date: "28-09-2022",
        receiver: { fullName: "Hussam", nb: "2" },
        eid: "1",
      },
      {
        sender: { fullName: "Hussam Khaled", nb: "2" },
        date: "28-09-2022",
        receiver: { fullName: "Jana", nb: "2" },
        eid: "2",
      },
      {
        sender: { fullName: "Hussam Khaled", nb: "2" },
        date: "28-09-2022",
        receiver: { fullName: "Jana", nb: "2" },
        eid: "3",
      },
      {
        sender: { fullName: "Hussam Khaled", nb: "2" },
        date: "28-09-2022",
        receiver: { fullName: "Jana", nb: "2" },
        eid: "4",
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
