import axios from "axios";
import * as actionTypes from "../../Actions/Actions";
import { server, privatePath } from "../Constants";

export const getAllParent = () => {
  return (dispatch) => {
    dispatch(getAllParentStart());
    var link = server + privatePath + "/facility/getAllParents";

    // var token = 'Bearer '+localStorage.getItem("nufmtoken");
    axios
      .get(link, {
        headers: {
          /*'Authorization': token,*/
        },
      })
      .then((res) => {
        // console.log(res.data);
        dispatch(getAllParentEnd(res.data));
      })
      .catch((err) => {
        dispatch(getAllParentFail(err));
      });
  };
};

export const getAllParentStart = () => {
  return {
    type: actionTypes.GetAllParent.GET_ALL_PARENT_START,
  };
};

export const getAllParentFail = (err) => {
  return {
    type: actionTypes.GetAllParent.GET_ALL_PARENT_FAIL,
    error: err,
  };
};

export const getAllParentEnd = (data) => {
  return {
    type: actionTypes.GetAllParent.GET_ALL_PARENT_END,
    data: data,
  };
};
