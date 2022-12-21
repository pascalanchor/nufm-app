import { StyleSheet, Text, View, Image } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import Landing from '../../Screens/LoginScreens/Landing'

export default function AdminNavigation() {
  return (
    <View style={styles.container}>
      {/* <NavigationContainer> */}
        {/* <Landing/> */}
      {/* </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
});
