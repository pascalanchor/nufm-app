import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server , privatePath} from "../Constants";

export const getOrderInfo = (name, value) => {
  return {
    type: actionTypes.AddOrder.ADD_ORDER,
    name: name,
    value: value,
  };
};

export const addOrder = (senderId,receiverId,email,phoneNumber,facilityParent,facilityId,date,orderContent, comment) => {
  return (dispatch) => {
    dispatch(addOrderStart());

    // var token = 'Bearer '+localStorage.getItem('nufmtoken');

    const params = { 
      "senderId": senderId,
      "receiverId": receiver,
      "email":email,
      "phoneNumber":phoneNumber,
      "facilityParent": facilityParent,
      "facilityId": facilityId,
      "date": date,
      "orderContent": orderContent,
      "comment": comment
    }

    var link = server +  privatePath + "/order";
    axios.post(link,params,{headers :{ /*'Authorization': token,*/ "Content-Type": "application/json" ,} ,})
      .then((res) => {
        if (res.data.message === "expectation failed") {
          dispatch(addOrderFail("expectation failed"));
        } else {
          dispatch(addOrderEnd(res.data));
        }
      })
      .catch((err) => {
        dispatch(addOrderFail(err));
      });
  };
};

export const addOrderStart = () => {
  return {
    type: actionTypes.AddOrder.ADD_ORDER_START,
  };
};

export const addOrderFail = (err) => {
  return {
    type: actionTypes.AddOrder.ADD_ORDER_FAIL,
    error: err,
  };
};

export const addOrderEnd = (data) => {
  return {
    type: actionTypes.AddOrder.ADD_ORDER_END,
    data: data,
  };
};