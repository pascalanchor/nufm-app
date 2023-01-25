import * as actionTypes from "../../Actions/Actions";

const initialState = {
  error: "",
  deleteInc: false,
  eid: "",
};

const DeleteIncidentR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DeleteIncident.DELETE_INCIDENT_INFO:
            return { ...state, [action.name] : action.value  }
    case actionTypes.DeleteIncident.DELETE_INCIDENT_END:
      return { ...state, deleteInc: true };
    case actionTypes.DeleteIncident.DELETE_INCIDENT_FAIL:
      return { ...state, error: action.error, deleteInc: false };
    default:
      return state;
  }
};

export default DeleteIncidentR;
