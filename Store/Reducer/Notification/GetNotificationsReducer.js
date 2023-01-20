import * as actionTypes from "../../Actions/Actions";

const initialState = {
  Notifications: [],
  error: "",
};

const GetNotificationsR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GetNotifications.GET_NOTIFICATIONS_END:
      return { ...state, Notifications: action.data };
    case actionTypes.GetNotifications.GET_NOTIFICATIONS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default GetNotificationsR;
