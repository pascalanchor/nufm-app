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
  GetAllParentR,
  GetRisksR,
  GetRiskDetailsR,
  AddRiskR,
  GetIncidentsR,
  GetIncidentDetailsR,
  AddIncidentR,
  GetNotificationsR,
  GetNotificationDetailsR,
  GetOrdersR,
  GetOrderDetailsR,
  AddOrderR,
  GetAllTasksR
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
  GetAllParentR: GetAllParentR,
  GetRisksR: GetRisksR,
  GetRiskDetailsR: GetRiskDetailsR,
  AddRiskR: AddRiskR,
  GetIncidentsR: GetIncidentsR,
  GetIncidentDetailsR: GetIncidentDetailsR,
  AddIncidentR: AddIncidentR,
  GetNotificationsR: GetNotificationsR,
  GetNotificationDetailsR: GetNotificationDetailsR,
  GetOrdersR: GetOrdersR,
  GetOrderDetailsR: GetOrderDetailsR,
  AddOrderR: AddOrderR,
  GetAllTasksR: GetAllTasksR
});
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <AdminNavigation /> */}
        {/* <ContractorNavigation /> */}
        {/* <WorkerNavigation /> */}
        <OccupantNavigation />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
