import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  Landing,
  Login,
  Reset,
  Home,
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
  Workers
} from "../../Screens";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function LoginNavigation() {
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
          <Stack.Screen name="Reset" component={Reset} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Risk" component={Risk} />
          <Stack.Screen name="Communication" component={Communication} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="Sender" component={Sender} />
          <Stack.Screen name="Incident" component={Incident} />
          <Stack.Screen name="IncidentDet" component={IncidentDet} />
          <Stack.Screen name="RiskDet" component={RiskDet} />
          <Stack.Screen name="Facilities" component={Facilities} />
          <Stack.Screen name="AddFacility" component={AddFacility} />
          <Stack.Screen name="Workers" component={Workers} />


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
