import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getRisks = () => {
  return (dispatch) => {
    // dispatch(getRisksStart());
    // var token = "Bearer " + localStorage.getItem("nufmtoken");
    // var link = server + privatePath + "/Risks";
    // axios
    //   .get(link, {
    //     headers: {/*'Authorization': token,*/},})
    //   .then((res) => {
    //     dispatch(getRisksEnd(res.data));
    //   })
    //   .catch((err) => {
    //     dispatch(getRisksFail(err));
    //   });

    const Risks = [
      { name: "Risk1", date: "28-09-2022", facilityName: "facility", eid: "1" },
      { name: "Risk2", date: "28-09-2022", facilityName: "facility", eid: "2" },
      {
        name: "Risk3",
        date: "28-09-2022",
        facilityName: "facility",
        eid: "3",
      },
      {
        name: "Risk4",
        date: "28-09-2022",
        facilityName: "facility",
        eid: "4",
      },
      {
        name: "Risk5",
        date: "28-09-2022",
        facilityName: "facility",
        eid: "5",
      },
    ];
    dispatch(getRisksEnd(Risks));
  };
};

export const getRisksStart = () => {
  return {
    type: actionTypes.GetRisks.GET_RISKS_START,
  };
};

export const getRisksFail = (err) => {
  return {
    type: actionTypes.GetRisks.GET_RISKS_FAIL,
    error: err,
  };
};

export const getRisksEnd = (data) => {
  return {
    type: actionTypes.GetRisks.GET_RISKS_END,
    data: data,
  };
};
