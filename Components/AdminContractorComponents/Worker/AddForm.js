import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import BasicInput from "../../../Components/SharedComponents/BasicInput";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { MultiSelect } from "react-native-element-dropdown";
import SelectDropdown from "react-native-select-dropdown";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function AddForm() {
  const [WName, setWName] = useState("");
  const [specMsg, setSpecMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [phoneMsg, setPhoneMsg] = useState("");

  const DATA = [
    { label: "Cleaner", value: "1" },
    { label: "Driver", value: "2" },
    { label: "Chef", value: "3" },
    { label: "Repair", value: "4" },
  ];

  const [selected, setSelected] = useState([]);
  const renderDataItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };
  return (
    <View style={styles.initialCont}>
      <View style={styles.container}>
        <View style={styles.subCont}>
          <View>
            <Text style={styles.label}>Worker Name *</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="default"

            //   onChangeText={onChange}
            //   value={value}
          />
          {WName && <Text style={styles.validation}>{WName}</Text>}
        </View>
        <View style={styles.subCont}>
          <View>
            <Text style={styles.label}>Specialisation *</Text>
          </View>
          <MultiSelect
            style={styles.input}
            containerStyle={{
              backgroundColor: "#FFF",
              marginTop: Platform.OS === "android" ? "-9.5%" : 0,
              borderRadius: 12,
            }}
            activeColor="#F1F1F1"
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            data={DATA}
            labelField="label"
            valueField="value"
            placeholder="Select one or more.."
            value={selected}
            onChange={(item) => {
              setSelected(item);
            }}
            renderRightIcon={() => (
              <Ionicons name="chevron-down-outline" size={20} color="#595959" />
            )}
            renderItem={renderDataItem}
            renderSelectedItem={(item, unSelect) => (
              <View style={{ justifyContent: "center" }}>
                <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                  <View style={styles.selectedStyle}>
                    <Text style={styles.textSelectedStyle}>{item.label}</Text>
                    <AntDesign name="close" size={16} color="#595959" />
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
          {specMsg && <Text style={styles.validation}>{specMsg}</Text>}
        </View>

        <View style={styles.subCont}>
          <View>
            <Text style={styles.label}>Email *</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="default"

            //   onChangeText={onChange}
            //   value={value}
          />
          {emailMsg && <Text style={styles.validation}>{emailMsg}</Text>}
        </View>

        <View style={styles.subCont}>
          <View>
            <Text style={styles.label}>Phone Number *</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="default"

            //   onChangeText={onChange}
            //   value={value}
          />
          {phoneMsg && <Text style={styles.validation}>{phoneMsg}</Text>}
        </View>
      </View>
      <View style={{ flexDirection: "row", marginBottom: "3%" }}>
        <View style={{ width: "30%" }}>
          <TouchableOpacity>
            <View style={styles.cancel}>
              <Text style={styles.canceltext}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "70%" }}>
          <TouchableOpacity>
            <View style={styles.save}>
              <Text style={styles.addSite}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  initialCont: {
    justifyContent: "space-between",
    flexDirection: "column",
  },
  input: {
    width: "100%",
    aspectRatio: 8.6 / 1,
    backgroundColor: "#F1F1F1",
    borderRadius: 12,
    paddingLeft: "4%",
    marginTop: "1%",
    fontSize: RFPercentage(1.5),
    paddingRight: "2%",
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
  item: {
    paddingVertical: "3%",
    paddingHorizontal: "4%",
  },
  placeholderStyle: {
    color: "#595959",
    fontSize: RFPercentage(1.5),
  },
  selectedTextStyle: {
    color: "#595959",
    fontSize: RFPercentage(1.5),
  },
  selectedStyle: {
    backgroundColor: "#F1F1F1",
    borderRadius: 12,
    marginTop: "10%",
    marginBottom: "1%",
    flexDirection: "row",
    marginHorizontal: "3%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: "2%",
    paddingVertical: "5%",
  },
  textSelectedStyle: {
    color: "#595959",
    fontSize: RFPercentage(1.5),
  },
  addSite: {
    fontSize: RFPercentage(1.9),
    fontWeight: "bold",
    color: "white",
    paddingLeft: "2%",
  },
  canceltext: {
    fontSize: RFPercentage(1.9),
    fontWeight: "bold",
    color: "#309694",
    paddingLeft: "2%",
  },
  save: {
    backgroundColor: "#309694",
    borderRadius: 12,
    paddingHorizontal: "2%",
    alignItems: "center",
    paddingVertical: "3%",
    justifyContent: "center",
    marginBottom: "7%",
    marginHorizontal: "7%",
  },
  cancel: {
    borderWidth: 1.5,
    borderColor: "#309694",
    borderRadius: 12,
    paddingHorizontal: "2%",
    alignItems: "center",
    paddingVertical: "5%",
    justifyContent: "center",
    marginBottom: "7%",
    marginLeft: "18%",
  },
  validation: {
    color: "red",
    paddingLeft: "1.5%",
    paddingTop: "1%",
    fontSize: RFPercentage(1.4),
  },
});
