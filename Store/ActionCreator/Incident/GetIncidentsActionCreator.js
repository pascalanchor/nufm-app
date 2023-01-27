import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getIncidents = () => {
  return (dispatch) => {
    // dispatch(getIncidentsStart());
    // var token = "Bearer " + localStorage.getItem("nufmtoken");
    // var link = server + privatePath + "/incidents";
    // axios
    //   .get(link, {
    //     headers: {/*'Authorization': token,*/},})
    //   .then((res) => {
    //     dispatch(getIncidentsEnd(res.data));
    //   })
    //   .catch((err) => {
    //     dispatch(getIncidentsFail(err));
    //   });

    const Incidents = [
      {
        sender: { fullName: "Hussam Khaled", nb: "2" },
        date: "28-09-2022",
        facility: { name: "facility", nbr: "1" },
        eid: "1",
      },
      {
        sender: { fullName: "Jana Zreika", nb: "3" },
        date: "28-09-2022",
        facility: { name: "facility", nbr: 4 },
        eid: "2",
      },
      {
        sender: { fullName: "Sam", nb: "%" },
        date: "28-09-2022",
        facility: { name: "facility", nbr: "6" },
        eid: "3",
      },
    ];

    dispatch(getIncidentsEnd(Incidents));
  };
};

export const getIncidentsStart = () => {
  return {
    type: actionTypes.GetIncidents.GET_INCIDENTS_START,
  };
};

export const getIncidentsFail = (err) => {
  return {
    type: actionTypes.GetIncidents.GET_INCIDENTS_FAIL,
    error: err,
  };
};

export const getIncidentsEnd = (data) => {
  return {
    type: actionTypes.GetIncidents.GET_INCIDENTS_END,
    data: data,
  };
};
