import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server , privatePath} from "../Constants";

export const getWorkerInfo = (name, value) => {
  return {
    type: actionTypes.AddWorker.ADD_WORKER,
    name: name,
    value: value,
  };
};

export const addWorker = (email,fullName,phone,specializations) => {
  return (dispatch) => {
    dispatch(addWorkerStart());

    var token = 'Bearer '+localStorage.getItem('nufmtoken');

    const params = { 
      "email": email,
      "fullName": fullName,
      "specializations": specializations,
      "phone": phone,
    }

    var link = server +  privatePath + "/worker/add";
    axios.post(link,params,{headers :{ /*'Authorization': token,*/ "Content-Type": "application/json" ,} ,})
      .then((res) => {
        if (res.data.message === "expectation failed") {
          dispatch(addWorkerFail("expectation failed"));
        } else {
          dispatch(addWorkerEnd(res.data));
        }
      })
      .catch((err) => {
        dispatch(addWorkerFail(err));
      });
  };
};

export const addWorkerStart = () => {
  return {
    type: actionTypes.AddWorker.ADD_WORKER_START,
  };
};

export const addWorkerFail = (err) => {
  return {
    type: actionTypes.AddWorker.ADD_WORKER_FAIL,
    error: err,
  };
};

export const addWorkerEnd = (data) => {
  return {
    type: actionTypes.AddWorker.ADD_WORKER_END,
    data: data,
  };
};