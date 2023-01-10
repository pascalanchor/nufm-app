import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import BasicInput from "../../../Components/SharedComponents/BasicInput";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";

export default function PrimaryContact() {

  const [primary, setprimary] = useState([
    {
      name: "",
      phone: "",
      email: "",
      jobTitle: "",
    },
  ]);
  const addInput = () => {
    setprimary([
      ...primary,
      {
        name: "",
        phone: "",
        email: "",
        jobTitle: "",
      },
    ]);
  };

  const removeInput = (index) => {
    const rows = [...primary];
    rows.pop();
    setprimary(rows);
  };
  const handleChangeItem = (index, e) => {
    const { name, value } = e.target;
    const list = [...primary];
    list[index][name] = value;
    setprimary(list);
  };

  return (
    <View style={styles.container}>
      <View style={styles.PrimaryCont}>
        <Text style={styles.Primary}>Primary Contact</Text>
      </View>
      {primary.map((item, i) => (
      <View key={i+1} style={styles.multi}>
      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Name</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="default"

          onChangeText={(event) => handleChangeItem(i, event)}
            value={item.name}
        />
      </View>
      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Phone Number</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"

          onChangeText={(event) => handleChangeItem(i, event)}
            value={item.phone}
        />
      </View>
      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Email</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="default"

          onChangeText={(event) => handleChangeItem(i, event)}
            value={item.email}
        />
      </View>
      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Job Title</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="default"

          onChangeText={(event) => handleChangeItem(i, event)}
            value={item.jobTitle}
        />
      </View>
      </View>
        ))}
      <View style={styles.addRemove}>
        <TouchableOpacity onPress={removeInput}>
          <View>
            <Entypo name="squared-minus" size={30} color="#309694" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={addInput}>
          <View>
            <MaterialIcons name="add-box" size={30} color="#309694" />
          </View>
        </TouchableOpacity>
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
        marginBottom: "8%",
      },
      subCont: {
        flexDirection: "column",
        width: "90%",
        marginTop: "4%",
      },
  label: {
    paddingLeft: "2.5%",
    fontWeight: "bold",
    color: "#595959",
    fontSize: RFPercentage(1.5),
  },
  inputs: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  PrimaryCont: {
    paddingHorizontal: "5%",
  },
  Primary: {
    textAlign: "left",
    fontWeight: "bold",
    color: "#666",
    fontSize: RFPercentage(1.9),
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
    paddingBottom: "3%",
  },
  addRemove: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    paddingTop: "3%",
  },
  multi: {
    marginHorizontal: "4%",
    width:"100%",
    justifyContent:"center",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
    paddingBottom: "7%",
  },
});
