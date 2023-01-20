import * as actionTypes from "../../Actions/Actions";

const initialState = {
  sender: "",
  status: "",
  receiver: "",
  date: "",
  note: "",
  eid: "",
  error: "",
  loading: false,
};

const GetNotificationDetailsR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetNotificationDetails.GET_NOTIFICATION_DETAILS_END:
      return {
        ...state,
        sender: action.data.sender,
        status: action.data.status,
        receiver: action.data.receiver,
        date: action.data.date,
        note: action.data.note,
        eid: action.data.eid,
        loading: false,
      };

    case actionTypes.GetNotificationDetails.GET_NOTIFICATION_DETAILS_END:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default GetNotificationDetailsR;
