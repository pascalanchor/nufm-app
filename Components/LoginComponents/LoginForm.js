import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import BasicInput from "../../Components/SharedComponents/BasicInput";
import Buttons from "../../Components/SharedComponents/Buttons";

export default function LoginForm() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.welcomeCont}>
        <Text style={styles.welcome}>Welcome !</Text>
      </View>
      <View style={styles.inputs}>
      <BasicInput label="Email" placeholder="Enter your Email here" />
      <BasicInput
        label="Password"
        bool={true}
        placeholder="Enter your Password"
      />
      </View>
        <Buttons
          text="Login"
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 25,
    marginVertical: "8%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "10%",
    marginHorizontal: "3%",
  },
  text: {
    color: "#023D26",
    fontSize: RFPercentage(2),
  },
  welcome: {
    color: "#023D26",
    fontWeight: "bold",
    fontSize: RFPercentage(4.5),
    textAlign: "center",
  },
  welcomeCont: {
    width: "100%",
    marginVertical: "4%",
    paddingTop: "5%",
  },
  inputs: {
    width:"100%",
    marginBottom: "8%",
  },
});
