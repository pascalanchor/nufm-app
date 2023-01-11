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
  Attendances,
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
          <Stack.Screen name="Contractor/Reset" component={Reset} />
          <Stack.Screen name="Contractor/Home">
            {(props) => <ContractorHome {...props} link="Contractor/" />}
          </Stack.Screen>
          <Stack.Screen name="Contractor/Risk" component={Risk} />
          <Stack.Screen
            name="Contractor/Communication"
            component={Communication}
          />
          <Stack.Screen
            name="Contractor/Notification"
            component={Notification}
          />
          <Stack.Screen name="Contractor/Sender" component={Sender} />
          <Stack.Screen name="Contractor/Incident">
            {(props) => <Incident {...props} link="Contractor/" />}
          </Stack.Screen>
          <Stack.Screen name="Contractor/IncidentDet" component={IncidentDet} />
          <Stack.Screen name="Contractor/RiskDet" component={RiskDet} />
          <Stack.Screen name="Contractor/Facilities">
            {(props) => <Facilities {...props} link="Contractor/" />}
          </Stack.Screen>
          <Stack.Screen name="Contractor/AddFacility">
            {(props) => <AddFacility {...props} link="Contractor/" />}
          </Stack.Screen>
          <Stack.Screen name="Contractor/Workers">
            {(props) => <Workers {...props} link="Contractor/" />}
          </Stack.Screen>
          <Stack.Screen name="Contractor/AddWorker" component={AddWorker} />
          <Stack.Screen name="Contractor/Attendances">
            {(props) => <Attendances {...props} link="Contractor/" />}
          </Stack.Screen>
          <Stack.Screen
            name="Contractor/CheckAttendance"
            component={CheckAttendance}
          />
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
