import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AdminNavigation from "./Navigation/AdminNavigation/AdminNavigation";
import ContractorNavigation from "./Navigation/ContractorNavigation/ContractorNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AdminNavigation /> */}
      <ContractorNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
