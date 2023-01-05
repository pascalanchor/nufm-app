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
  const countries = ["Parent1", "FP2", "FP3", "Fp4"];
  const types = ["Education", "Retail"];
  return (
    <View style={styles.container}>
      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Facility Name</Text>
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
          <Text style={styles.label}>Facility Parent</Text>
        </View>
        <SelectDropdown
          renderDropdownIcon={() => (
            <Ionicons name="chevron-down-outline" size={20} color="#595959" />
          )}
          dropdownIconPosition="right"
          defaultButtonText="Select a parent.."
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
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>

      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Facility Type</Text>
        </View>
        <SelectDropdown
          renderDropdownIcon={() => (
            <Ionicons name="chevron-down-outline" size={20} color="#595959" />
          )}
          dropdownIconPosition="right"
          defaultButtonText="Select a Type.."
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
          data={types}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>

      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Location</Text>
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
          <Text style={styles.label}>Street</Text>
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
          <Text style={styles.label}>Post code</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"

          //   onChangeText={onChange}
          //   value={value}
        />
      </View>
      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>SQM</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"

          //   onChangeText={onChange}
          //   value={value}
        />
      </View>

      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Construction Year</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"

          //   onChangeText={onChange}
          //   value={value}
        />
      </View>

      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Date Opened</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"

          //   onChangeText={onChange}
          //   value={value}
        />
      </View>

      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Description</Text>
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
