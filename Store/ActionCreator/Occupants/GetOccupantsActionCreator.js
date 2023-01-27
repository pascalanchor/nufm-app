import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getOccupants = () => {
  return (dispatch) => {
    // dispatch(getOccupantsStart());
    // var token = "Bearer " + localStorage.getItem("nufmtoken");
    // var link = server + privatePath + "/occupants";
    // axios
    //   .get(link, {
    //     headers: {/*'Authorization': token,*/},})
    //   .then((res) => {
    //     dispatch(getOccupantsEnd(res.data));
    //   })
    //   .catch((err) => {
    //     dispatch(getOccupantsFail(err));
    //   });

    const Occupants = [
        {
          email:"1",
          fullName: "Hussam Khaled",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
          time: "9:00AM",
          phone: "70580011",
        },
        {
          email:"2",
          fullName: "Jana Zreika",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
          time: "9:00AM",
          phone: "03358475",
        },
        {
          email:"3",
          fullName: "Tarek Zreika",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
          time: "9:00AM",
          phone: "70322027",
        },
        {
          email:"4",
          fullName: "Hussam Khaled2",
          profileImage: "",
          createdAt: "2022-11-30T15:56:42.078+00:00",
          time: "9:00AM",
          phone: "70580011",
        },
      ];
      dispatch(getOccupantsEnd(Occupants));
  };
};

export const getOccupantsStart = () => {
  return {
    type: actionTypes.GetOccupants.GETOCCUPANTS_START,
  };
};

export const getOccupantsFail = (err) => {
  return {
    type: actionTypes.GetOccupants.GETOCCUPANTS_FAIL,
    error: err,
  };
};

export const getOccupantsEnd = (data) => {
  return {
    type: actionTypes.GetOccupants.GETOCCUPANTS_END,
    data: data,
  };
};
