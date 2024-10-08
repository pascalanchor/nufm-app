{/*
  
  import * as actionTypes from "../../Actions/Actions";

const initialState = {
  facilityParent: "",
  facility: "",
  user:"",
  task: "",
  type:"",
  lng:"",
  lat:"",
  attendanceImage:"",
  error: "",
  loading: false,
  eid: "",
};

const AddAttendanceR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AddAttendance.ADD_ATTENDANCE:
      return { ...state, [action.name]: action.value };

    case actionTypes.AddAttendance.ADD_ATTENDANCE_START:
      return { ...state, loading: true };

    case actionTypes.AddAttendance.ADD_ATTENDANCE_END:
      return {...state,loading: false,error:'Added Successfully'};

    case actionTypes.AddAttendance.ADD_ATTENDANCE_FAIL:
      return { ...state, loading: false, error:'Tap to Scan Again' };

    default:
      return state;
  }
};

export default AddAttendanceR;

*/}


import * as actionTypes from "../../Actions/Actions";

const initialState = {
  facilityParent: "",
  facility: "",
  task: "",
  user: "",
  type: "",
  lng: "",
  lat: "",
  attendanceImage: [], 
  error: "",
  loading: false,
  eid: "",
};

const AddAttendanceR = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AddAttendance.ADD_ATTENDANCE:
      return { ...state, [action.name]: action.value };

    case actionTypes.AddAttendance.ADD_ATTENDANCE_START:
      return { ...state, loading: true };

    case actionTypes.AddAttendance.ADD_ATTENDANCE_END:
      return {
        ...state,
        loading: false,
        error: '',

      };

    case actionTypes.AddAttendance.ADD_ATTENDANCE_FAIL:
      return { 
        ...state, 
        loading: false, 
        error: 'Tap to Scan Again' 
      };

    default:
      return state;
  }
};

export default AddAttendanceR;
