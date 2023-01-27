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

export default function Occupant() {
  const [Occupant, setOccupant] = useState([
    {
      name: "",
      phone: "",
      email: "",
      note: "",
      landline:"",
      jobTitle:"",
    },
  ]);
  const addInput = () => {
    setOccupant([
      ...Occupant,
      {
        name: "",
        phone: "",
        email: "",
        note: "",
        landline:"",
        jobTitle:"",
      },
    ]);
  };

  const removeInput = (index) => {
    const rows = [...Occupant];
    rows.pop();
    setOccupant(rows);
  };
  const handleChangeItemName = (index, value) => {
    const list = [...Occupant];
    list[index].name = value;
    setOccupant(list);
  };
  const handleChangeItemEmail = (index, value) => {
    const list = [...Occupant];
    list[index].email = value;
    setOccupant(list);
  };
  const handleChangeItemPhone = (index, value) => {
    const list = [...Occupant];
    list[index].phone = value;
    setOccupant(list);
  };
  const handleChangeItemNote = (index, value) => {
    const list = [...Occupant];
    list[index].note = value;
    setOccupant(list);
  };
  const handleChangeItemLandline = (index, value) => {
    const list = [...Occupant];
    list[index].landline = value;
    setOccupant(list);
  };
  const handleChangeItemJob = (index, value) => {
    const list = [...Occupant];
    list[index].jobTitle = value;
    setOccupant(list);
  };

  return (
    <View style={styles.container}>
      <View style={styles.OccupantCont}>
        <Text style={styles.Occupant}>Occupant(s)</Text>
      </View>
      {Occupant.map((item, i) => (
        <View key={i + 1} style={styles.multi}>
          <View style={styles.subCont}>
            <View>
              <Text style={styles.label}>Name</Text>
            </View>
            <TextInput
              style={styles.input}
              keyboardType="default"
              onChangeText={(value) => handleChangeItemName(i, value)}
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
              onChangeText={(value) => handleChangeItemPhone(i, value)}
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
              onChangeText={(value) => handleChangeItemEmail(i, value)}
              value={item.email}
            />
          </View>
          <View style={styles.subCont}>
            <View>
              <Text style={styles.label}>Landline</Text>
            </View>
            <TextInput
              style={styles.input}
              keyboardType="default"
              onChangeText={(value) => handleChangeItemLandline(i, value)}
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
              onChangeText={(value) => handleChangeItemJob(i, value)}
              value={item.email}
            />
          </View>
          <View style={styles.subCont}>
            <View>
              <Text style={styles.label}>Note</Text>
            </View>
            <TextInput
              style={styles.note}
              keyboardType="default"
              onChangeText={(value) => handleChangeItemNote(i, value)}
              value={item.note}
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
  OccupantCont: {
    paddingHorizontal: "5%",
  },
  Occupant: {
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
    width: "100%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
    paddingBottom: "7%",
  },
  note: {
    width: "100%",
    aspectRatio: 4 / 1,
    backgroundColor: "#F1F1F1",
    borderRadius: 12,
    paddingLeft: "4%",
    marginTop: "1%",
    fontSize: RFPercentage(1.5),
  },
});
