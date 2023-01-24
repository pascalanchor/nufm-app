import React, { useState, useEffect } from "react";
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
import SelectDropdown from "react-native-select-dropdown";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import DatePickerAndroid from "../../SharedComponents/DatePickerAndroid";
import DatePickerIOS from "../../SharedComponents/DatePickerIOS";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as AddIncidentActionCreator from "../../../Store/ActionCreator/Incident/AddIncidentActionCreator";
import * as GetFacilitiesActionCreator from "../../../Store/ActionCreator/Fcaility/GetFacilitiesActionCreator";
import * as GetFacParentActionCreator from "../../../Store/ActionCreator/Fcaility/GetFacParentActionCreator";
import * as GetTasksActionCreator from "../../../Store/ActionCreator/Task/GetTasksActionCreator";

function AddIncident({
  getIncidentInfo,
  addIncident,
  facilityParent,
  facilitySite,
  task,
  date,
  hour,
  time,
  incident,
  comment,
  email,
  error,
  loading,
  Facilities,
  getFacilities,
  getAllParent,
  parent,
  tasks,
  getAllTaskInfo,
}) {
  useEffect(() => {
    getFacilities();
    getAllParent();
    getAllTaskInfo();
    getIncidentInfo("facilityParent", "");
    getIncidentInfo("facilitySite", "");
    getIncidentInfo("task", "");
    getIncidentInfo("date", "");
    getIncidentInfo("hour", "");
    getIncidentInfo("time", "");
    getIncidentInfo("incident", "");
    getIncidentInfo("comment", "");
    getIncidentInfo("email", "");
    getIncidentInfo("error", "");
  }, []);
  const navigation = useNavigation();
  const siteName = Facilities.map((fn) => fn.name);
  const parentName = parent.map((pr) => pr.name);
  const Tasks = tasks.map((wr) => wr.name);
  const timeH = ["AM", "PM"];

  const handleOnChange = (value, name) => {
    getIncidentInfo(name, value);
  };

  const handleClick = () => {
    addIncident(
      facilityParent,
      facilitySite,
      task,
      date,
      hour,
      time,
      incident,
      comment,
      email
    );
  };

  return (
    <View style={styles.initialCont}>
      <View style={styles.iconsTop}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={32} color="#309694" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign
            name="close"
            size={26}
            color="#898989"
            style={styles.close}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
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
              handleOnChange(selectedItem, "facilityParent");
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            value={facilityParent}
          />
        </View>
        <View style={styles.subCont}>
          <View>
            <Text style={styles.label}>Facility Site</Text>
          </View>
          <SelectDropdown
            renderDropdownIcon={() => (
              <Ionicons name="chevron-down-outline" size={20} color="#595959" />
            )}
            dropdownIconPosition="right"
            defaultButtonText="Select a site.."
            rowTextStyle={{
              color: "#595959",
            }}
            buttonStyle={styles.btnselectstyle}
            buttonTextStyle={styles.btnselectxtstyle}
            dropdownStyle={styles.dropdownHour}
            rowTextStyle={styles.rows}
            data={siteName}
            onSelect={(selectedItem, index) => {
              handleOnChange(selectedItem, "facilitySite");
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            value={facilitySite}
          />
        </View>

        <View style={styles.subCont}>
          <View>
            <Text style={styles.label}>Task</Text>
          </View>
          <SelectDropdown
            renderDropdownIcon={() => (
              <Ionicons name="chevron-down-outline" size={20} color="#595959" />
            )}
            dropdownIconPosition="right"
            defaultButtonText="Select a task.."
            rowTextStyle={{
              color: "#595959",
            }}
            buttonStyle={styles.btnselectstyle}
            buttonTextStyle={styles.btnselectxtstyle}
            dropdownStyle={styles.dropdownHour}
            rowTextStyle={styles.rows}
            data={Tasks}
            onSelect={(selectedItem, index) => {
              handleOnChange(selectedItem, "task");
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            value={task}
          />
        </View>
        <View style={styles.subCont}>
          {Platform.OS === "android" ? (
            <DatePickerAndroid
              label="Date"
              value={date}
              handleOnChange={(value) => handleOnChange(value, "date")}
            />
          ) : (
            <DatePickerIOS
              label="Date"
              value={date}
              handleOnChange={(value) => handleOnChange(value, "date")}
            />
          )}
        </View>

        <View style={styles.subCont}>
          <View>
            <Text style={styles.label}>Hour</Text>
          </View>
          <View style={styles.inputSelect}>
            <TextInput
              style={styles.inputHour}
              keyboardType="numeric"
              onChangeText={(value) => handleOnChange(value, "hour")}
              value={hour}
            />

            <SelectDropdown
              renderDropdownIcon={() => (
                <Ionicons
                  name="chevron-down-outline"
                  size={20}
                  color="#595959"
                />
              )}
              dropdownIconPosition="right"
              defaultButtonText="AM"
              rowTextStyle={{
                color: "#595959",
              }}
              buttonStyle={styles.btnHourStyle}
              buttonTextStyle={styles.btnselectxtstyle}
              data={timeH}
              dropdownStyle={styles.dropdownHour}
              rowTextStyle={styles.rows}
              onSelect={(selectedItem, index) => {
                handleOnChange(selectedItem, "time");
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              value={time}
            />
          </View>
        </View>

        <View style={styles.subCont}>
          <View>
            <Text style={styles.label}>Incident</Text>
          </View>
          <TextInput
            style={styles.inputInc}
            keyboardType="default"
            onChangeText={(value) => handleOnChange(value, "incident")}
            value={incident}
            multiline={true}
          />
        </View>

        <View style={styles.subCont}>
          <View>
            <Text style={styles.label}>Comment</Text>
          </View>
          <TextInput
            style={styles.inputInc}
            keyboardType="default"
            onChangeText={(value) => handleOnChange(value, "comment")}
            value={comment}
            multiline={true}
          />
        </View>

        <View style={styles.subCont}>
          <View>
            <Text style={styles.label}>Send Email</Text>
          </View>
          <TextInput
            style={styles.input}
            keyboardType="default"
            onChangeText={(value) => handleOnChange(value, "email")}
            value={email}
          />
        </View>
      </View>
      {error && (
        <View style={styles.errorMsg}>
          <AntDesign name="checkcircle" size={24} color="#02A962" />
          <Text style={styles.errorTxt}>{error}</Text>
        </View>
      )}
      <View style={{ flexDirection: "row", marginBottom: "3%" }}>
        <View style={{ width: "30%" }}>
          <TouchableOpacity>
            <View style={styles.cancel}>
              <Text style={styles.canceltext}>Cancel</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ width: "70%" }}>
          <TouchableOpacity onPress={handleClick}>
            <View style={styles.save}>
              <Text style={styles.addSite}>Send</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    facilityParent: state.AddIncidentR.facilityParent,
    facilitySite: state.AddIncidentR.facilitySite,
    receiver: state.AddIncidentR.receiver,
    comment: state.AddIncidentR.comment,
    error: state.AddIncidentR.error,
    loading: state.AddIncidentR.loading,
    Facilities: state.GetFacilitiesR.Facilities,
    parent: state.GetAllParentR.parent,
    tasks: state.GetAllTasksR.tasks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFacilities: () => dispatch(GetFacilitiesActionCreator.getFacilities()),
    getAllParent: () => dispatch(GetFacParentActionCreator.getAllParent()),
    getAllTaskInfo: () => dispatch(GetTasksActionCreator.getAllTaskInfo()),
    getIncidentInfo: (name, value) =>
      dispatch(AddIncidentActionCreator.getIncidentInfo(name, value)),
    addIncident: (
      facilityParent,
      facilitySite,
      task,
      date,
      hour,
      time,
      incident,
      comment,
      email
    ) =>
      dispatch(
        AddIncidentActionCreator.addIncident(
          facilityParent,
          facilitySite,
          task,
          date,
          hour,
          time,
          incident,
          comment,
          email
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddIncident);

const styles = StyleSheet.create({
  initialCont: {
    justifyContent: "space-between",
    flexDirection: "column",
  },
  iconsTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "6%",
    marginHorizontal: "6%",
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
  inputInc: {
    width: "100%",
    aspectRatio: 4.5 / 1,
    backgroundColor: "#F1F1F1",
    borderRadius: 12,
    paddingLeft: "4%",
    marginTop: "1%",
    fontSize: RFPercentage(1.5),
    paddingRight: "2%",
  },
  inputHour: {
    width: "68%",
    aspectRatio: 5.8 / 1,
    backgroundColor: "#F1F1F1",
    borderRadius: 12,
    paddingLeft: "4%",
    marginTop: "1%",
    fontSize: RFPercentage(1.5),
    paddingRight: "2%",
    marginRight: "2%",
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
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "8%",
    marginTop: "3%",
  },
  subCont: {
    flexDirection: "column",
    width: "90%",
    marginTop: "3%",
  },
  inputSelect: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
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
  errorMsg: {
    marginHorizontal: "5%",
    marginBottom: "7%",
    backgroundColor: "#CAF3D1",
    flexDirection: "row",
    padding: "3.5%",
    borderRadius: 12,
    alignItems: "center",
  },
  errorTxt: {
    fontWeight: "bold",
    paddingHorizontal: "4%",
    color: "#595959",
  },
});
