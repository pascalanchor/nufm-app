import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Workers from "./Workers";
import Contractors from "./Contractors";
import Occupants from "./Occupants";

const Tab = createMaterialTopTabNavigator();

export default function TabPannel({searchVal}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#023D26",
        tabBarIndicatorStyle: {
          backgroundColor: "#B4D9CB",
        },
        tabBarLabelStyle: {
          fontSize: RFPercentage(1.4),
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen name="Workers" component={Workers} searchVal={searchVal}/>
      <Tab.Screen name="Contractors" component={Contractors} />
      <Tab.Screen name="Occupants" component={Occupants} />
    </Tab.Navigator>
  );
}
