import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getNotifications = () => {
  return (dispatch) => {
    // dispatch(getNotificationsStart());
    // var token = "Bearer " + localStorage.getItem("nufmtoken");
    // var link = server + privatePath + "/notifications";
    // axios
    //   .get(link, {
    //     headers: {/*'Authorization': token,*/},})
    //   .then((res) => {
    //     dispatch(getNotificationsEnd(res.data));
    //   })
    //   .catch((err) => {
    //     dispatch(getNotificationsFail(err));
    //   });

    const Notifications = [
      { name: "Hussam Khaled", date: "28-09-2022", receiver: "Jana", eid: "1" },
      { name: "Jana Zreika", date: "28-09-2022", receiver: "Jana", eid: "2" },
      {
        name: "Samir Sam",
        date: "28-09-2022",
        receiver: "Jana",
        eid: "3",
      },
      {
        name: "Hussam Khaled99",
        date: "28-09-2022",
        receiver: "Jana",
        eid: "4",
      },
      {
        name: "Samir Sam44",
        date: "28-09-2022",
        receiver: "Jana",
        eid: "5",
      },
      {
        name: "Hussam Khaled22",
        date: "28-09-2022",
        receiver: "Jana",
        eid: "6",
      },
    ];
    dispatch(getNotificationsEnd(Notifications));
  };
};

export const getNotificationsStart = () => {
  return {
    type: actionTypes.GetNotifications.GET_NOTIFICATIONS_START,
  };
};

export const getNotificationsFail = (err) => {
  return {
    type: actionTypes.GetNotifications.GET_NOTIFICATIONS_FAIL,
    error: err,
  };
};

export const getNotificationsEnd = (data) => {
  return {
    type: actionTypes.GetNotifications.GET_NOTIFICATIONS_END,
    data: data,
  };
};
