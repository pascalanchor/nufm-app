import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AdminNavigation from "./Navigation/AdminNavigation/AdminNavigation";
import ContractorNavigation from "./Navigation/ContractorNavigation/ContractorNavigation";
import WorkerNavigation from "./Navigation/WorkerNavigation/WorkerNavigation";
import OccupantNavigation from "./Navigation/OccupantNavigation/OccupantNavigation";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  LoginR,
  GetWorkersR,
  GetAttendancesR,
  GetCheckByIdR,
  AddWorkerR,
  GetFacilitiesR,
  AddFacilityR,
  GetRisksR,
  GetRiskDetailsR,
  GetIncidentsR,
  GetIncidentDetailsR,
  GetNotificationsR,
  GetNotificationDetailsR
} from "./Store";
const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const reducer = combineReducers({
  LoginR: LoginR,
  GetWorkersR: GetWorkersR,
  AddWorkerR: AddWorkerR,
  GetAttendancesR: GetAttendancesR,
  GetCheckByIdR: GetCheckByIdR,
  GetFacilitiesR: GetFacilitiesR,
  AddFacilityR: AddFacilityR,
  GetRisksR: GetRisksR,
  GetRiskDetailsR: GetRiskDetailsR,
  GetIncidentsR: GetIncidentsR,
  GetIncidentDetailsR: GetIncidentDetailsR,
  GetNotificationsR: GetNotificationsR,
  GetNotificationDetailsR: GetNotificationDetailsR
});
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AdminNavigation />
        {/* <ContractorNavigation /> */}
        {/* <WorkerNavigation /> */}
        {/* <OccupantNavigation /> */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
