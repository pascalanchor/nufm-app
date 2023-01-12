import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  Landing,
  Login,
  Reset,
  ContractorHome,
  Calendar,
  Analytics,
  Incident,
  Support,
  Risk,
  Communication,
  Notification,
  Sender,
  IncidentDet,
  RiskDet,
  Facilities,
  AddFacility,
  Workers,
  AddWorker,
  AttendancesC,
  AddAttendance,
  CheckAttendance,
} from "../../Screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function ContractorNavigation() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          navigationOptions={{ gesturesEnabled: false }}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Landing"
            component={Landing}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Worker/Reset">
            {(props) => <Reset {...props} link="Worker/" />}
          </Stack.Screen>
          <Stack.Screen name="Worker/Home">
            {(props) => <ContractorHome {...props} link="Worker/" />}
          </Stack.Screen>
          <Stack.Screen name="Worker/Risk">
            {(props) => <Risk {...props} link="Worker/" />}
          </Stack.Screen>

          <Stack.Screen name="Worker/Communication">
            {(props) => <Communication {...props} link="Worker/" />}
          </Stack.Screen>
          <Stack.Screen name="Worker/Notification">
            {(props) => <Notification {...props} link="Worker/" />}
          </Stack.Screen>
          <Stack.Screen name="Worker/Sender">
            {(props) => <Sender {...props} link="Worker/" />}
          </Stack.Screen>
          <Stack.Screen name="Worker/Incident">
            {(props) => <Incident {...props} link="Worker/" />}
          </Stack.Screen>
          <Stack.Screen name="Worker/IncidentDet">
            {(props) => <IncidentDet {...props} link="Worker/" />}
          </Stack.Screen>
          <Stack.Screen name="Worker/RiskDet">
            {(props) => <RiskDet {...props} link="Worker/" />}
          </Stack.Screen>
          <Stack.Screen name="Worker/Facilities">
            {(props) => <Facilities {...props} link="Worker/" />}
          </Stack.Screen>
          <Stack.Screen name="Worker/AddFacility">
            {(props) => <AddFacility {...props} link="Worker/" />}
          </Stack.Screen>
          <Stack.Screen name="Worker/Workers">
            {(props) => <Workers {...props} link="Worker/" />}
          </Stack.Screen>
          <Stack.Screen name="Worker/AddWorker">
            {(props) => <AddWorker {...props} link="Worker/" />}
          </Stack.Screen>
          <Stack.Screen name="Worker/AttendancesC">
            {(props) => <AttendancesC {...props} link="Worker/" />}
          </Stack.Screen>
          <Stack.Screen name="Worker/AddAttendance">
            {(props) => <AddAttendance {...props} link="Worker/" />}
          </Stack.Screen>
          <Stack.Screen name="Worker/CheckAttendance">
            {(props) => <CheckAttendance {...props} link="Worker/" />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
