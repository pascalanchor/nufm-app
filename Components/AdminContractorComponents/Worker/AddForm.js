import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BasicInput from "../../../Components/SharedComponents/BasicInput";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import SelectDropdown from "react-native-select-dropdown";
import { Ionicons } from "@expo/vector-icons";

export default function AddForm() {
  return (
    <View style={styles.container}>
      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Worker Name</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="default"

          //   onChangeText={onChange}
          //   value={value}
        />
      </View>
      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Specialisation</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="default"

          //   onChangeText={onChange}
          //   value={value}
        />
      </View>

      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Email</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="default"

          //   onChangeText={onChange}
          //   value={value}
        />
      </View>

      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Phone Number</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="default"

          //   onChangeText={onChange}
          //   value={value}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    aspectRatio: 8.6 / 1,
    backgroundColor: "#F1F1F1",
    borderRadius: 12,
    paddingLeft: "4%",
    marginTop: "1%",
    fontSize: RFPercentage(1.5),
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "8%",
  },
  subCont: {
    flexDirection: "column",
    width: "90%",
    marginTop: "4%",
  },
  label: {
    paddingLeft: "1.5%",
    fontWeight: "bold",
    color: "#595959",
    fontSize: RFPercentage(1.5),
  },
});
