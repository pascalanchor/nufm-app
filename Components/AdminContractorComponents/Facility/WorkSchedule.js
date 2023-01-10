import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Platform,
  FlatList,
} from "react-native";
import BasicInput from "../../../Components/SharedComponents/BasicInput";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import SelectDropdown from "react-native-select-dropdown";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";

export default function WorkSchedule() {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [work, setWork] = useState([
    {
      dayFrom: "",
      hourFrom: "",
      dayTo: "",
      hourTo: "",
    },
  ]);
  const addInput = () => {
    setWork([
      ...work,
      {
        dayFrom: "",
        hourFrom: "",
        dayTo: "",
        hourTo: "",
      },
    ]);
  };

  const removeInput = (index) => {
    const rows = [...work];
    rows.pop();
    setWork(rows);
  };
  const handleChangeItem = (index, value) => {
    // const { name, value } = e.target;
    const list = [...work];
    list[index] = value;
    setWork(list);
  };

  return (
    <View style={styles.container}>
      <View style={styles.workCont}>
        <Text style={styles.workeSch}>Work Schedule</Text>
      </View>
      {work.map((item, i) => (
        <View
          key={i + 1}
          style={styles.multi}
        >
          <View style={styles.inputs}>
            <View style={styles.subCont}>
              <View>
                <Text style={styles.label}>From</Text>
              </View>
              <SelectDropdown
                renderDropdownIcon={() => (
                  <Ionicons
                    name="chevron-down-outline"
                    size={20}
                    color="#595959"
                  />
                )}
                dropdownIconPosition="right"
                defaultButtonText="Select day.."
                rowTextStyle={{
                  color: "#595959",
                }}
                buttonStyle={{
                  backgroundColor: "#F1F1F1",
                  borderRadius: 12,
                  paddingLeft: "4%",
                  marginTop: "2%",
                  height: 40,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
                buttonTextStyle={{
                  fontSize: RFPercentage(1.8),
                  color: "#595959",
                  textAlign: "left",
                }}
                data={weekDays}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                onChangeText={(event) => handleChangeItem(i, event)}
                value={item.dayFrom}
              />
            </View>
            <View style={styles.subCont}>
              <TextInput
                style={styles.input}
                keyboardType="default"
                placeholder="8:00 am"
                onChangeText={(event) => handleChangeItem(i, event)}
                value={item.hourFrom}
              />
            </View>
          </View>
          <View style={styles.inputs}>
            <View style={styles.subCont}>
              <View>
                <Text style={styles.label}>To</Text>
              </View>
              <SelectDropdown
                renderDropdownIcon={() => (
                  <Ionicons
                    name="chevron-down-outline"
                    size={20}
                    color="#595959"
                  />
                )}
                dropdownIconPosition="right"
                defaultButtonText="Select day.."
                rowTextStyle={{
                  color: "#595959",
                }}
                buttonStyle={{
                  backgroundColor: "#F1F1F1",
                  borderRadius: 12,
                  paddingLeft: "4%",
                  marginTop: "2%",
                  height: 40,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
                buttonTextStyle={{
                  fontSize: RFPercentage(1.8),
                  color: "#595959",
                  textAlign: "left",
                }}
                data={weekDays}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                onChangeText={(event) => handleChangeItem(i, event)}
                value={item.dayTo}
              />
            </View>
            <View style={styles.subCont}>
              <TextInput
                style={styles.input}
                keyboardType="default"
                placeholder="5:00 pm"
                onChangeText={(event) => handleChangeItem(i, event)}
                value={item.hourTo}
              />
            </View>
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
    aspectRatio: 3.85 / 1,
    backgroundColor: "#F1F1F1",
    borderRadius: 12,
    paddingLeft: "4%",
    marginTop: "1%",
    fontSize: RFPercentage(1.5),
    marginLeft: "5%",
  },
  container: {
    flexDirection: "column",
    marginBottom: "8%",
  },
  subCont: {
    flexDirection: "column",
    width: "50%",
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
  workCont: {
    paddingHorizontal: "5%",
  },
  workeSch: {
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
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
    paddingBottom: "7%",
  },
});
