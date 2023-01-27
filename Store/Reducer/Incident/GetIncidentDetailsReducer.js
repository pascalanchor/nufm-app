import * as actionTypes from "../../Actions/Actions";

const initialState = {
  sender: "",
  facility: "",
  task: "",
  date:"",
  ihour:"",
  incident: "",
  comment: "",
  eid: "",
  error: "",
  loading: false,
};

const GetIncidentDetailsR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetIncidentDetails.GET_INCIDENT_DETAILS_END:
      return {
        ...state,
        sender: action.data.sender,
        facility: action.data.facility,
        task: action.data.task,
        incident: action.data.incident,
        comment: action.data.comment,
        task: action.data.task,
        ihour: action.data.ihour,
        eid: action.data.eid,
        loading: false,
      };

    case actionTypes.GetIncidentDetails.GET_INCIDENT_DETAILS_END:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default GetIncidentDetailsR;
