import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AdminNavigation from "./Navigation/AdminNavigation/AdminNavigation";
import ContractorNavigation from "./Navigation/ContractorNavigation/ContractorNavigation";
import WorkerNavigation from "./Navigation/WorkerNavigation/WorkerNavigation";
import OccupantNavigation from "./Navigation/OccupantNavigation/OccupantNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AdminNavigation /> */}
      {/* <ContractorNavigation /> */}
      {/* <WorkerNavigation /> */}
      <OccupantNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
