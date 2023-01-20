import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getNotificationDetails = (eid) => {
  return (dispatch) => {
    // var token = "Bearer " + localStorage.getItem("nufmtoken");
    var link = server + privatePath + "/notification/details/" + eid;

    axios
      .get(link, {
        headers: {
          /*Authorization: token*/
        },
      })
      .then((res) => {
        if (res.data.message === "expectation failed") {
          dispatch(getNotificationDetailsFail("expectation failed"));
        } else {
          dispatch(getNotificationDetailsEnd(res.data));
        }
      })
      .catch((err) => {
        dispatch(getNotificationDetailsFail(err));
      });
  };
};

export const getNotificationDetailsEnd = (data) => {
  return {
    type: actionTypes.GetNotificationDetails.GET_NOTIFICATION_DETAILS_END,
    data: data,
  };
};

export const getNotificationDetailsFail = (err) => {
  return {
    type: actionTypes.GetNotificationDetails.GET_NOTIFICATION_DETAILS_END,
    error: err,
  };
};
