import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getRisks = () => {
  return (dispatch) => {
    // dispatch(getRisksStart());
    // var token = "Bearer " + localStorage.getItem("nufmtoken");
    // var link = server + privatePath + "/risk/all";
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
      {
        sender: { fullName: "Hussam Khaled", nb: "2" },
        date: "28-09-2022",
        facility: { name: "facility", nbr: "1" },
        id: "1",
      },
      {
        sender: { fullName: "Hussam Khaled", nb: "2" },
        date: "28-09-2022",
        facility: { name: "facility", nbr: "1" },
        id: "2",
      },
      {
        sender: { fullName: "Hussam Khaled", nb: "2" },
        date: "28-09-2022",
        facility: { name: "facility", nbr: "1" },
        id: "3",
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
