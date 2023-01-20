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
      { name: "Hussam Khaled", date: "28-09-2022", facilityName: "facility", eid: "1" },
      { name: "Jana Zreika", date: "28-09-2022", facilityName: "facility", eid: "2" },
      {
        name: "Sam",
        date: "28-09-2022",
        facilityName: "facility",
        eid: "3",
      },
      {
        name: "Hussam Khaled",
        date: "28-09-2022",
        facilityName: "facility",
        eid: "4",
      },
      {
        name: "Jana Zreika",
        date: "28-09-2022",
        facilityName: "facility",
        eid: "5",
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
