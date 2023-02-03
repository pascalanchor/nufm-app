import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import BasicInput from "../../Components/SharedComponents/BasicInput";
import Buttons from "../../Components/SharedComponents/Buttons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import * as LoginActionCreators from "../../Store/ActionCreator/Login/LoginActionCreator";

function LoginForm({
  email,
  password,
  fullName,
  profileImage,
  phone,
  creationDate,
  message,
  roles,
  loading,
  error,
  token,
  getLoginInfo,
  submitLogin,
}) {
  const navigation = useNavigation();
  let STORAGE_KEY = "@user_token";
  const [fName, setFname] = useState("");
  const [ntoken, setNtoken] = useState("");

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("fullName", fullName);
      await AsyncStorage.setItem("nufmtoken", token);
      await AsyncStorage.setItem("profileImage", profileImage);
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("roles", JSON.stringify(roles));
    } catch (e) {
      // alert('Failed to save the data to the storage')
    }
  };

  const fN = async () => {
    try {
      const fn = await AsyncStorage.getItem("fullName");
      if (fn !== null) {
        setFname(fn);
        // console.log("----------------");
        // console.log(fName);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  const nT = async () => {
    try {
      const nt = await AsyncStorage.getItem("nufmtoken");
      if (nt !== null) {
        setNtoken(nt);
      }
      // console.log("----------------");
      // console.log(ntoken);
    } catch (e) {
      alert("Failed to fetch the token from storage");
    }
  };

  useEffect(() => {
    fN();
    nT();
    if (fName !== fullName && ntoken !== token) {
      saveData();
    } else {
    }
  }, [fullName, token]);

  if (token !== "" && fullName !== "" && roles.length !== 0) {
    const role = roles[0];
    switch (role) {
      case "ROLE_WORKER":
        setTimeout(() => navigation.navigate("Worker/Home"), 3000);
        break;
      case "ROLE_ADMIN":
        setTimeout(() => navigation.navigate("Home"), 3000);
        break;
      case "ROLE_OCCUPANT":
        setTimeout(() => navigation.navigate("Occupant/Home"), 3000);
        break;
      case "ROLE_CONTRACTOR":
        setTimeout(() => navigation.navigate("Contractor/Home"), 3000);
        break;
      case "ROLE_OWNER":
        setTimeout(() => navigation.navigate("Owner"), 3000);
        break;
      default:
        setTimeout(() => navigation.navigate("Landing"), 3500);
        break;
    }
  }

  const handleOnChange = (value, name) => {
    getLoginInfo(name, value);
  };

  const submitForm = () => {
    submitLogin(email, password);
    // console.log(email,password)
    console.log({"fullname":fName, "token": ntoken});

  };
  // useEffect(() => {
    // console.log(fName, ntoken);
  // },[]);

  return (
    <View style={styles.container}>
      <View style={styles.welcomeCont}>
        <Text style={styles.welcome}>Welcome !</Text>
      </View>
      <View style={styles.inputs}>
        <BasicInput
          label="Email"
          keyboardType="email-address"
          placeholder="Enter your Email here"
          value={email}
          onChangeText={(value) => handleOnChange(value, "email")}
        />
        <BasicInput
          label="Password"
          bool={true}
          placeholder="Enter your Password"
          value={password}
          onChangeText={(value) => handleOnChange(value, "password")}
        />
      </View>
      {error && (
        <View style={styles.errorMsg}>
          <AntDesign name="checkcircle" size={24} color="#D60C0C" />
          <Text style={styles.errorTxt}>{error}</Text>
        </View>
      )}
      {/* <Buttons text="Login" onPress={()=> navigation.navigate("Home")} /> */}
      <Buttons text="Login" onPress={submitForm} loading={loading} />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.LoginR.email,
    roles: state.LoginR.roles,
    password: state.LoginR.password,
    fullName: state.LoginR.fullName,
    token: state.LoginR.token,
    profileImage: state.LoginR.profileImage,
    phone: state.LoginR.phone,
    loading: state.LoginR.loading,
    creationDate: state.LoginR.creationDate,
    message: state.LoginR.message,
    error: state.LoginR.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getLoginInfo: (name, value) =>
      dispatch(LoginActionCreators.getLoginInfo(name, value)),
    submitLogin: (email, password) =>
      dispatch(LoginActionCreators.submitLogin(email, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

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
    width: "100%",
    marginBottom: "8%",
  },
  errorMsg: {
    marginHorizontal: "5%",
    marginBottom: "3%",
    backgroundColor: "#F9B7B7",
    flexDirection: "row",
    padding: "3.5%",
    borderRadius: 12,
    alignItems: "center",
    width: "87%",
  },
  errorTxt: {
    fontWeight: "bold",
    paddingHorizontal: "4%",
    color: "#D60C0C",
  },
});
