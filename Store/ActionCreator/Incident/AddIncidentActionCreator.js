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

export const addIncident = (facilityParent,facilitySite,task,date, hour,time, incident, comment, email) => {
  return (dispatch) => {
    dispatch(addIncidentStart());

    // var token = 'Bearer '+localStorage.getItem('nufmtoken');

    const params = { 
      "facilityParent": facilityParent,
      "facilitySite": facilitySite,
      "task": task,
      "date":date,
      "hour":hour,
      "time":time,
      "incident": incident,
      "comment": comment,
      "email": email
    }

    var link = server +  privatePath + "/incident/add";
    axios.post(link,params,{headers :{ /*'Authorization': token,*/ "Content-Type": "application/json" ,} ,})
      .then((res) => {
        if (res.data.message === "expectation failed") {
          dispatch(addIncidentFail("expectation failed"));
        } else {
          dispatch(addIncidentEnd(res.data));
        }
      })
      .catch((err) => {
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