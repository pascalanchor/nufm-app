import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getAllTaskInfo = () => {
  return (dispatch) => {
    // var token = 'Bearer '+localStorage.getItem('nufmtoken');

    var link = server + privatePath + "/tasks";

    axios
      .get(link, {
        headers: {
          /*'Authorization': token,*/
        },
      })
      .then((res) => {
        dispatch(getAllTaskInfoEnd(res.data));
      })
      .catch((err) => {
        dispatch(getAllTaskInfoFail(err));
      });
  };
};

export const getAllTaskInfoEnd = (data) => {
  return {
    type: actionTypes.GetAllTasks.GET_ALL_TASKS_END,
    tasksInfo: data,
  };
};

export const getAllTaskInfoFail = (err) => {
  return {
    type: actionTypes.GetAllTasks.GET_ALL_TASKS_FAIL,
    error: err,
  };
};
