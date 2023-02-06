import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server , privatePath} from "../Constants";

export const getIncidentInfo = (name, value) => {
  return {
    type: actionTypes.AddIncident.ADD_INCIDENT,
    name: name,
    value: value,
  };
};

export const addIncident = (senderId,facilityId,taskId,date, ihour, incident, comment) => {
  return (dispatch) => {
    dispatch(addIncidentStart());

    // var token = 'Bearer '+localStorage.getItem('nufmtoken');

    const params = { 
      "senderId":senderId,
      "facilityId": facilityId,
      "taskId": taskId,
      "date":date,
      "ihour":ihour,
      "incident": incident,
      "comment": comment,
    }

    console.log(params);

    var link = server +  privatePath + "/incident/add";
    axios.post(link,params,{headers :{ /*'Authorization': token,*/ "Content-Type": "application/json" ,} ,})
      .then((res) => {
        console.log(res.data)
        if (res.data.message === "expectation failed") {
          dispatch(addIncidentFail("expectation failed"));
        } else {
          dispatch(addIncidentEnd(res.data));
        }
      })
      .catch((err) => {
        console.log(err)
        dispatch(addIncidentFail(err));
      });
  };
};

export const addIncidentStart = () => {
  return {
    type: actionTypes.AddIncident.ADD_INCIDENT_START,
  };
};

export const addIncidentFail = (err) => {
  return {
    type: actionTypes.AddIncident.ADD_INCIDENT_FAIL,
    error: err,
  };
};

export const addIncidentEnd = (data) => {
  return {
    type: actionTypes.AddIncident.ADD_INCIDENT_END,
    data: data,
  };
};