import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AdminNavigation from "./Navigation/AdminNavigation/AdminNavigation";
import ContractorNavigation from "./Navigation/ContractorNavigation/ContractorNavigation";
import WorkerNavigation from "./Navigation/WorkerNavigation/WorkerNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AdminNavigation /> */}
      {/* <ContractorNavigation /> */}
      <WorkerNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
