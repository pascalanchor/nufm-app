import * as actionTypes from "../../Actions/Actions";

const initialState = {
  sender: "",
  site: "",
  facility: "",
  task: "",
  incident: "",
  note: "",
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
        site: action.data.site,
        facility: action.data.facility,
        task: action.data.task,
        incident: action.data.incident,
        note: action.data.note,
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
