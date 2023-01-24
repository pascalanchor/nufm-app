import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getFacilities = () => {
  return (dispatch) => {
    // dispatch(getFacilitiesStart());
    // var token = "Bearer " + localStorage.getItem("nufmtoken");
    // var link = server + privatePath + "/Facilities";
    // axios
    //   .get(link, {
    //     headers: {/*'Authorization': token,*/},})
    //   .then((res) => {
    //     dispatch(getFacilitiesEnd(res.data));
    //   })
    //   .catch((err) => {
    //     dispatch(getFacilitiesFail(err));
    //   });

    const Facilities = [
      {
        name: "Facility one",
        location: "Tripoli- el tal",
        type: "Education 345",
        occupants:[
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
        ]
      },
      {
        name: "Facility two",
        location: "Tripoli",
        type: "Education 123",
        occupants:[
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
        ]
      },
      {
        name: "Facility three",
        location: "Tripoli",
        type: "Retails",
        occupants:[
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
        ]
      },
      {
        name: "Facility four",
        location: "Tripoli-Lebanon",
        type: "Education 123",
        occupants:[
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
            name: "Hussam Khaled2",
            profileImage: "",
            date: "28-09-2022",
            time: "9:00AM",
            phone: "70580011",
          },
        ]
      },
    ];
    dispatch(getFacilitiesEnd(Facilities));
  };
};

export const getFacilitiesStart = () => {
  return {
    type: actionTypes.GetFacilities.GET_FACILITIES_START,
  };
};

export const getFacilitiesFail = (err) => {
  return {
    type: actionTypes.GetFacilities.GET_FACILITIES_FAIL,
    error: err,
  };
};

export const getFacilitiesEnd = (data) => {
  return {
    type: actionTypes.GetFacilities.GET_FACILITIES_END,
    data: data,
  };
};
