import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server , privatePath} from "../Constants";

export const getAttendanceInfo = (name, value) => {
  return {
    type: actionTypes.AddAttendance.ADD_ATTENDANCE,
    name: name,
    value: value,
  };
};

export const addAttendance = (facilityParent,facilitySite,task,lngIn,latIn, longOut,latOut) => {
  return (dispatch) => {
    dispatch(addAttendanceStart());

    // var token = 'Bearer '+localStorage.getItem('nufmtoken');

    const params = { 
      "facilityParent": facilityParent,
      "facilitySite": facilitySite,
      "task:"task,
      "lngIn": lngIn,
      "latIn":latIn,
      "longOut":longOut,
      "latOut":latOut,
    }

    var link = server +  privatePath + "/attendance/add";
    axios.post(link,params,{headers :{ /*'Authorization': token,*/ "Content-Type": "application/json" ,} ,})
      .then((res) => {
        if (res.data.message === "expectation failed") {
          dispatch(addAttendanceFail("expectation failed"));
        } else {
          dispatch(addAttendanceEnd(res.data));
        }
      })
      .catch((err) => {
        dispatch(addAttendanceFail(err));
      });
  };
};

export const addAttendanceStart = () => {
  return {
    type: actionTypes.AddAttendance.ADD_ATTENDANCE_START,
  };
};

export const addAttendanceFail = (err) => {
  return {
    type: actionTypes.AddAttendance.ADD_ATTENDANCE_FAIL,
    error: err,
  };
};

export const addAttendanceEnd = (data) => {
  return {
    type: actionTypes.AddAttendance.ADD_ATTENDANCE_END,
    data: data,
  };
};