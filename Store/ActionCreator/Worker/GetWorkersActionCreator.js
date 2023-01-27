import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getWorkers = () => {
  return (dispatch) => {
    // dispatch(getWorkersStart());
    // var token = "Bearer " + localStorage.getItem("nufmtoken");
    // var link = server + privatePath + "/workers";
    // axios
    //   .get(link, {
    //     headers: {/*'Authorization': token,*/},})
    //   .then((res) => {
    //     dispatch(getWorkersEnd(res.data));
    //   })
    //   .catch((err) => {
    //     dispatch(getWorkersFail(err));
    //   });

    const Wr = [
        {
          email:"1",
          fullName: "Hussam Khaled",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
          time: "9:00AM",
          phone: "70580011",
          spec:"Driver"
        },
        {
          email:"2",
          fullName: "Jana Zreika",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
          time: "9:00AM",
          phone: "03358475",
          spec:"Driver"
        },
        {
          email:"3",
          fullName: "Jana Zreika",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
          time: "9:00AM",
          phone: "70322027",
          spec:"Driver"
        },
        {
          email:"4",
          fullName: "Hussam Khaled2",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
          time: "9:00AM",
          phone: "70580011",
          spec:"Driver"
        },
        {
          email:"5",
          fullName: "Jana Zreika9",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
          time: "9:00AM",
          phone: "03358475",
          spec:"Driver"
        }
      ];
      dispatch(getWorkersEnd(Wr));
  };
};

export const getWorkersStart = () => {
  return {
    type: actionTypes.GetWorkers.GETWORKERS_START,
  };
};

export const getWorkersFail = (err) => {
  return {
    type: actionTypes.GetWorkers.GETWORKERS_FAIL,
    error: err,
  };
};

export const getWorkersEnd = (data) => {
  return {
    type: actionTypes.GetWorkers.GETWORKERS_END,
    data: data,
  };
};
