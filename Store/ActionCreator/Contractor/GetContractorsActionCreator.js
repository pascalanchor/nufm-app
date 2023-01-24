import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getContractors = () => {
  return (dispatch) => {
    // dispatch(getContractorsStart());

    // // var token = 'Bearer '+localStorage.getItem('nufmtoken');

    // var link = server + privatePath + "/contractors";
    // axios
    //   .get(link, {
    //     headers: {
    //       /*'Authorization': token,*/
    //     },
    //   })
    //   .then((res) => {
    //     dispatch(getContractorsEnd(res.data));
    //   })
    //   .catch((err) => {
    //     dispatch(getContractorsFail(err));
    //   });
    const Contractors = [
        {
          name: "Hussam Khaled",
          profileImage: "",
          date: "28-09-2022",
          time: "9:00AM",
          phone: "70580011",
        },
        {
          name: "Jana Zreika",
          profileImage: "",
          date: "28-09-2022",
          time: "9:00AM",
          phone: "03358475",
        },
        {
          name: "Tarek Zreika",
          profileImage: "",
          date: "28-09-2022",
          time: "9:00AM",
          phone: "70322027",
        },
        {
          name: "Hussam Khaled2",
          profileImage: "",
          date: "28-09-2022",
          time: "9:00AM",
          phone: "70580011",
        },
        {
          name: "Jana Zreika9",
          profileImage: "",
          date: "28-09-2022",
          time: "9:00AM",
          phone: "03358475",
        },
        {
          name: "Samir Sam7",
          profileImage: "",
          date: "28-09-2022",
          time: "9:00AM",
          phone: "70322027",
        },
      ];
      dispatch(getContractorsEnd(Contractors));
  };
};

export const getContractorsStart = () => {
  return {
    type: actionTypes.GetContractors.GETCONTRACTORS_START,
  };
};

export const getContractorsFail = (err) => {
  return {
    type: actionTypes.GetContractors.GETCONTRACTORS_FAIL,
    error: err,
  };
};

export const getContractorsEnd = (data) => {
  return {
    type: actionTypes.GetContractors.GETCONTRACTORS_END,
    contractorInfo: data,
  };
};
