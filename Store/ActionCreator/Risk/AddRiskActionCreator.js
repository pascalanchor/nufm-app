import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server , privatePath} from "../Constants";

export const getRiskInfo = (name, value) => {
  return {
    type: actionTypes.AddRisk.ADD_RISK,
    name: name,
    value: value,
  };
};

export const addRisk = (senderId,facilityId,risk,comment) => {
  return (dispatch) => {
    dispatch(addRiskStart());

    // var token = 'Bearer '+localStorage.getItem('nufmtoken');

    const params = { 
      "senderId": senderId,
      "facilityId": facilityId,
      "risk": risk,
      "comment": comment
    }

    var link = server +  privatePath + "/risk";
    axios.post(link,params,{headers :{ /*'Authorization': token,*/ "Content-Type": "application/json" ,} ,})
      .then((res) => {
        console.log(res.data)
        if (res.data.message === "expectation failed") {
          dispatch(addRiskFail("expectation failed"));
        } else {
          dispatch(addRiskEnd(res.data));
        }
      })
      .catch((err) => {
        console.log(err)
        dispatch(addRiskFail(err));
      });
  };
};

export const addRiskStart = () => {
  return {
    type: actionTypes.AddRisk.ADD_RISK_START,
  };
};

export const addRiskFail = (err) => {
  return {
    type: actionTypes.AddRisk.ADD_RISK_FAIL,
    error: err,
  };
};

export const addRiskEnd = (data) => {
  return {
    type: actionTypes.AddRisk.ADD_RISK_END,
    data: data,
  };
};