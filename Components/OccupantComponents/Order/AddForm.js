import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import SelectDropdown from "react-native-select-dropdown";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AddOrderActionCreator from "../../../Store/ActionCreator/Order/AddOrderActionCreator";
import * as GetFacilitiesActionCreator from "../../../Store/ActionCreator/Fcaility/GetFacilitiesActionCreator";
import * as GetFacParentActionCreator from "../../../Store/ActionCreator/Fcaility/GetFacParentActionCreator";
import * as GetWorkersActionCreator from "../../../Store/ActionCreator/Worker/GetWorkersActionCreator";

function AddForm({
  getOrderInfo,
  addOrder,
  senderId,
  email,
  date,
  facilityId,
  receiverId,
  orderContent,
  comment,
  error,
  loading,
  Facilities,
  getFacilities,
  getAllParent,
  parent,
  Workers,
  phoneNumber,
  getWorkers,
}) {
  useEffect(() => {
    fN();
    getFacilities();
    getAllParent();
    getWorkers();
    getOrderInfo("senderId", "");
    getOrderInfo("email", "");
    getOrderInfo("date", "");
    getOrderInfo("facilityId", "");
    getOrderInfo("receiverId", "");
    getOrderInfo("orderContent", "");
    getOrderInfo("comment", "");
    getOrderInfo("error", "");
  }, []);
  const navigation = useNavigation();
  const siteName = Facilities.map((fn) => fn.name);
  const workerName = Workers.map((wr) => wr.fullName);

  const handleOnChange = (value, name) => {
    getOrderInfo(name, value);
  };

  const handleOnChangeFacility = (index) => {
    getOrderInfo("facilityId", Facilities[index].eid);
  };

  const handleOnChangeWorker = (index) => {
    getOrderInfo("receiverId", Workers[index].email);
  };

  const [semail, setSEmail] = useState("");
  const fN = async () => {
    try {
      const adname = await AsyncStorage.getItem("email");
      if (adname !== null) {
        setSEmail(adname);
      }
    } catch (e) {
      alert("Failed to fetch the input from storage");
    }
  };

  const handleClick = () => {
    addOrder(
      semail,
      receiverId,
      email,
      phoneNumber,
      facilityId,
      date,
      orderContent,
      comment
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
            <Text style={styles.label}>Facility Site</Text>
          </View>
          <SelectDropdown
            renderDropdownIcon={() => (
              <Ionicons name="chevron-down-outline" size={20} color="#595959" />
            )}
            dropdownIconPosition="right"
            defaultButtonText="Select a site.."
            buttonStyle={styles.btnselectstyle}
            buttonTextStyle={styles.btnselectxtstyle}
            dropdownStyle={styles.dropdownHour}
            rowTextStyle={styles.rows}
            data={siteName}
            onSelect={(selectedItem, index) => {
              handleOnChangeFacility(index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            value={facilityId}
          />
        </View>

        <View style={styles.subCont}>
          <View>
            <Text style={styles.label}>To</Text>
          </View>
          <SelectDropdown
            renderDropdownIcon={() => (
              <Ionicons name="chevron-down-outline" size={20} color="#595959" />
            )}
            dropdownIconPosition="right"
            defaultButtonText=" "
            buttonStyle={styles.btnselectstyle}
            buttonTextStyle={styles.btnselectxtstyle}
            dropdownStyle={styles.dropdownHour}
            rowTextStyle={styles.rows}
            data={workerName}
            onSelect={(selectedItem, index) => {
              handleOnChangeWorker(index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            value={receiverId}
          />
        </View>

        <View style={styles.subCont}>
          <View>
            <Text style={styles.label}>Order</Text>
          </View>
          <TextInput
            style={styles.inputInc}
            keyboardType="default"
            onChangeText={(value) => handleOnChange(value, "orderContent")}
            value={orderContent}
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
        {!loading ? (
          <View style={{ width: "70%" }}>
            <TouchableOpacity onPress={handleClick}>
              <View style={styles.save}>
                <Text style={styles.addSite}>Send</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ width: "70%" }}>
            <TouchableOpacity>
              <View style={styles.save}>
                <Text style={styles.addSite}>Sending... </Text>
                <ActivityIndicator size="small" color="#fff" />
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    facilityId: state.AddOrderR.facilityId,
    receiverId: state.AddOrderR.receiverId,
    senderId: state.AddOrderR.senderId,
    date: state.AddOrderR.date,
    email: state.AddOrderR.email,
    phoneNumber: state.AddOrderR.phoneNumber,
    orderContent: state.AddOrderR.orderContent,
    comment: state.AddOrderR.comment,
    error: state.AddOrderR.error,
    loading: state.AddOrderR.loading,
    Facilities: state.GetFacilitiesR.Facilities,
    parent: state.GetAllParentR.parent,
    Workers: state.GetWorkersR.Workers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFacilities: () => dispatch(GetFacilitiesActionCreator.getFacilities()),
    getAllParent: () => dispatch(GetFacParentActionCreator.getAllParent()),
    getWorkers: () => dispatch(GetWorkersActionCreator.getWorkers()),
    getOrderInfo: (name, value) =>
      dispatch(AddOrderActionCreator.getOrderInfo(name, value)),
    addOrder: (
      senderId,
      receiverId,
      email,
      phoneNumber,
      facilityId,
      date,
      orderContent,
      comment
    ) =>
      dispatch(
        AddOrderActionCreator.addOrder(
          senderId,
          receiverId,
          email,
          phoneNumber,
          facilityId,
          date,
          orderContent,
          comment
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

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
    flexDirection: "row",
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
