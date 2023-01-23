import * as actionTypes from "../../Actions/Actions";

const initialState = {
  parent: [],
  error: "",
};

const GetAllParentR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetAllParent.GET_ALL_PARENT_END:
      return { ...state, parent: action.data };
    case actionTypes.GetAllParent.GET_ALL_PARENT_FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default GetAllParentR;
