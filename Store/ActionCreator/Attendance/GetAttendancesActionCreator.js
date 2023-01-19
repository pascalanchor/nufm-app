import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getAttendances = () => {
  return (dispatch) => {
    // dispatch(getAttendancesStart());
    // var token = "Bearer " + localStorage.getItem("nufmtoken");
    // var link = server + privatePath + "/attendances";
    // axios
    //   .get(link, {
    //     headers: {/*'Authorization': token,*/},})
    //   .then((res) => {
    //     dispatch(getAttendancesEnd(res.data));
    //   })
    //   .catch((err) => {
    //     dispatch(getAttendancesFail(err));
    //   });

    const Attendances = [
      {
        name: "Attendance one",
        Facility: "Fac1",
        Email: "janjoune.97@hotmail.com",
        eid:"1"
      },
      {
        name: "Attendance two",
        Facility: "Fac2236",
        Email: "Nufm@gmail.com",
        eid:"2"
      },
      {
        name: "Attendance three",
        Facility: "Fac2236",
        Email: "janjoune.97@hotmail.com",
        eid:"3"
      },
      {
        name: "Attendance four",
        Facility: "Fac2236",
        Email: "Nufm@gmail.com",
        eid:"4"
      },
      {
        name: "Attendance five",
        Facility: "Fac2236",
        Email: "Nufm@gmail.com",
        eid:"5"
      },
  
    ];
      dispatch(getAttendancesEnd(Attendances));
  };
};

export const getAttendancesStart = () => {
  return {
    type: actionTypes.GetAttendances.GET_ATTENDANCES_START,
  };
};

export const getAttendancesFail = (err) => {
  return {
    type: actionTypes.GetAttendances.GET_ATTENDANCES_FAIL,
    error: err,
  };
};

export const getAttendancesEnd = (data) => {
  return {
    type: actionTypes.GetAttendances.GET_ATTENDANCES_END,
    data: data,
  };
};
