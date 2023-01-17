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
      },
      {
        name: "Attendance two",
        Facility: "Fac2236",
        Email: "Nufm@gmail.com",
      },
      {
        name: "Attendance three",
        Facility: "Fac2236",
        Email: "janjoune.97@hotmail.com",
      },
      {
        name: "Attendance four",
        Facility: "Fac2236",
        Email: "Nufm@gmail.com",
      },
      {
        name: "Attendance five",
        Facility: "Fac2236",
        Email: "Nufm@gmail.com",
      },
      {
        name: "Attendance six",
        Facility: "Fac2236",
        Email: "Nufm@gmail.com",
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
