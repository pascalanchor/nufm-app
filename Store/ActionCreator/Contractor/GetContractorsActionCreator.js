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
          fullName: "Hussam Khaled",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
          time: "9:00AM",
          phone: "70580011",
        },
        {
          fullName: "Jana Zreika",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
          time: "9:00AM",
          phone: "03358475",
        },
        {
          fullName: "Tarek Zreika",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
          time: "9:00AM",
          phone: "70322027",
        },
        {
          fullName: "Hussam Khaled2",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
          time: "9:00AM",
          phone: "70580011",
        },
        {
          fullName: "Jana Zreika9",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
          time: "9:00AM",
          phone: "03358475",
        },
        {
          fullName: "Samir Sam7",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
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
