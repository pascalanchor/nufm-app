import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Platform,
} from "react-native";
import BasicInput from "../../../Components/SharedComponents/BasicInput";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import SelectDropdown from "react-native-select-dropdown";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import DatePickerAndroid from "../../SharedComponents/DatePickerAndroid";
import DatePickerIOS from "../../SharedComponents/DatePickerIOS";
import { connect } from "react-redux";
import * as GetFacParentActionCreator from "../../../Store/ActionCreator/Fcaility/GetFacParentActionCreator";
import * as AddFacilityActionCreator from "../../../Store/ActionCreator/Fcaility/AddFacilityActionCreator";

function AddForm({
  // formData,
  // setFormData,
  // facName,
  // handleOnChangeName,
  // getAllParent,
  // parent,

  link,
  parentId,
  name,
  type,
  location,
  sqm,
  const_year,
  date_opened,
  street,
  post_code,
  description,
  primaryEmail,
  workSchedule,
  eid,
  error,
  loading,
  getFacilityInfo,
  addFacility,
  parent,
  getAllParent,
  getFacilityOccupantInfo,
  addFacilityOccupant,
  email,
  fullName,
  phone,
  notes,
  profileImage,
}) {
  const types = ["Education", "Retail"];

  // useEffect(() => {
  //   // getAllParent();
  // }, []);
  const prnt = [
    {
        "name": "Parent",
        "iid": "15c23281-c294-456f-8f84-ccfe38655553"
    },
    {
      "name": "Par",
      "iid": "15c23281-c294-456f-8f84-ccfe38655553"
  }
]
  const parentName = prnt.map((pr) => pr.name);

  const handleChange = (n,e) =>{
    getFacilityInfo(n,e);
  }

  const handleChangeParent = (index) =>{
      getFacilityInfo("parentId",prnt[index].iid);
  }

  const handleChangeType = (index) =>{
    console.log(types[index]);
    getFacilityInfo("type",types[index]);
}

  const handleOnChange = (v, n) => {
    getFacilityInfo(n,v);
  };


  return (
    <View style={styles.container}>
      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Facility Name *</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="default"
          value={name}
          // onChangeText={(v) => handleChange(v, "name")}
          onChangeText={(e)=>handleChange("name",e)}
          // onEndEditing={()=>endNameEditing()}
        />
        {/* {facName && <Text style={styles.validation}>{facName}</Text>} */}
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
          buttonStyle={styles.btnselectstyle}
          buttonTextStyle={styles.btnselectxtstyle}
          dropdownStyle={styles.dropdownHour}
          rowTextStyle={styles.rows}
          data={parentName}
          onSelect={(selectedItem, index) => {
            // console.log(selectedItem, index);
            handleChangeParent(index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          // value={formData.facilityParent}
          // onChangeText={(val) => handleChange(val)}
        />
      </View>

      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Facility Type *</Text>
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
          buttonStyle={styles.btnselectstyle}
          buttonTextStyle={styles.btnselectxtstyle}
          dropdownStyle={styles.dropdownHour}
          rowTextStyle={styles.rows}
          data={types}
          onSelect={(selectedItem, index) => {
            // console.log(selectedItem, index);
            handleChangeType(index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          // value={formData.facilityType}
        />
      </View>

      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Location *</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="default"
          value={location}
          onChangeText={(val) => handleChange("location",val)}

          // value={formData.location}
        />
      </View>

      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Street *</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="default"
          onChangeText={(val) => handleChange("street",val)}
          //   onChangeText={onChange}
          value={street}
        />
      </View>
      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Post code *</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
            // onChangeText={onChange}
            onChangeText={(val) => handleChange("post_code",val)}
          value={post_code}
        />
      </View>
      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>SQM</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(val) => handleChange("sqm",val)}

          //   onChangeText={onChange}
          value={sqm}
        />
      </View>

      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Construction Year *</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(val) => handleChange("const_year",val)}

          //   onChangeText={onChange}
          value={const_year}
        />
      </View>

      <View style={styles.subCont}>
        {Platform.OS === "android" ? (
          <DatePickerAndroid
            label="Date Opened *"
            //  value={date}
            handleOnChange={(value) => handleOnChange(value, "date_opened")}
          />
        ) : (
          <DatePickerIOS
            label="Date Opened *"
            //  value={date}
            handleOnChange={(value) => handleOnChange(value, "date_opened")}
          />
        )}
      </View>

      <View style={styles.subCont}>
        <View>
          <Text style={styles.label}>Description *</Text>
        </View>
        <TextInput
          style={styles.input}
          keyboardType="default"
          onChangeText={(val) => handleChange("description",val)}

          //   onChangeText={onChange}
          value={description}
        />
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    parent: state.GetAllParentR.parent,
    parentId: state.AddFacilityR.parentId,
    name: state.AddFacilityR.name,
    type: state.AddFacilityR.type,
    location: state.AddFacilityR.location,
    sqm: state.AddFacilityR.sqm,
    const_year: state.AddFacilityR.const_year,
    date_opened: state.AddFacilityR.date_opened,
    workSchedule: state.AddFacilityR.workSchedule,
    primaryEmail: state.AddFacilityR.primaryEmail,
    street: state.AddFacilityR.street,
    post_code: state.AddFacilityR.post_code,
    description: state.AddFacilityR.description,
    eid: state.AddFacilityR.eid,
    error: state.AddFacilityR.error,
    loading: state.AddFacilityR.loading,
    parent: state.GetAllParentR.parent,
    email: state.AddFacilityOccupantR.email,
    fullName: state.AddFacilityOccupantR.fullName,
    phone: state.AddFacilityOccupantR.phone,
    notes: state.AddFacilityOccupantR.notes,
    profileImage: state.AddFacilityOccupantR.profileImage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllParent: () => dispatch(GetFacParentActionCreator.getAllParent()),
    getFacilityInfo: (name, value) =>
    dispatch(AddFacilityActionCreator.getFacilityInfo(name, value)),

  addFacility: (
    parentId,
    name,
    type,
    location,
    sqm,
    const_year,
    date_opened,
    street,
    post_code,
    description,
    primaryEmail,
    workSchedul
  ) =>
    dispatch(
      AddFacilityActionCreator.addFacility(
        parentId,
        name,
        type,
        location,
        sqm,
        const_year,
        date_opened,
        street,
        post_code,
        description,
        primaryEmail,
        workSchedule
      )
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

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
  dropdownHour: {
    borderRadius: 8,
    marginTop: "-7%",
  },
  rows: {
    fontSize: RFPercentage(1.8),
  },
  btnselectstyle: {
    backgroundColor: "#F1F1F1",
    borderRadius: 12,
    paddingLeft: "4%",
    marginTop: "2%",
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btnHourStyle: {
    backgroundColor: "#F1F1F1",
    borderRadius: 12,
    paddingLeft: "4%",
    marginTop: "2%",
    height: 40,
    width: "30%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  btnselectxtstyle: {
    fontSize: RFPercentage(1.8),
    color: "#595959",
    textAlign: "left",
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
  validation: {
    color: "red",
    paddingLeft: "1.5%",
    paddingTop: "1%",
    fontSize: RFPercentage(1.4),
  },
});
