import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-virtualized-view";
import CMenu from "../../../Components/SharedComponents/CMenu";
import Header from "../../../Components/SharedComponents/Header";
import AddForm from "../../../Components/AdminContractorComponents/Facility/AddForm";
import AddStep2 from "../../../Components/AdminContractorComponents/Facility/AddStep2";
import AddStep3 from "../../../Components/AdminContractorComponents/Facility/AddStep3";
import { connect } from "react-redux";
import * as AddFacilityActionCreator from "../../../Store/ActionCreator/Fcaility/AddFacilityActionCreator";
// import * as AddFacilityOccupantActionCreator from "../../../store/ActionCreator/Facility/AddFacilityOccupantActionCreator";
import * as GetFacParentActionCreator from "../../../Store/ActionCreator/Fcaility/GetFacParentActionCreator";

function AddFacility({
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
}) {
  const [facName, setFacName] = useState("");
  const [facParent, setFacParent] = useState("");
  const [page, setPage] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    facilityName: name,
    facilityParent: parentId,
    facilityType: type,
    location: location,
    street: street,
    postCode: post_code,
    sqm: sqm,
    constYear: const_year,
    date: date_opened,
    desc: description,
    employment_status: null,
  });
useEffect(()=>{
  console.log(formData.facilityName)
},[])
const handleOnChangeName = (value, name) => {
  // if (!value || value > 24) {
  //   setIsNameValid(false);
  // } else {
  //   setIsNameValid(true);
  // }
  getFacilityInfo("facilityName", value);
};
  const multiStepForm = () => {
    switch (page) {
      case 0:
        return (
          <AddForm
          handleOnChangeName={handleOnChangeName}
            facName={facName}
            facParent={facParent}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case 1:
        return <AddStep2 formData={formData} setFormData={setFormData} />;
      case 2:
        return <AddStep3 formData={formData} setFormData={setFormData} />;
      default:
        return <AddForm formData={formData} setFormData={setFormData} />;
    }
  };
  function handleSubmit() {
    if (page === 0) {
      if (formData.facilityName === "" || formData.facilityName.length <= 1) {
        return setFacName("Please enter a valid name");
      } else if (formData.location === "") {
        return setFacParent("Please select a parent");
      } else {
        setPage(page + 1);
      }
    } else if (page === 1) {
      // do form validation again
    } else if (page === 2) {
      // set page === 0 , and clear fields
    } else setPage(page + 1);
  }
  return (
    <View style={styles.box}>
      <View>
        <CMenu
          link={link}
          modalVisible={modalVisible}
          setModal={setModalVisible}
        />
      </View>
      <Header link={link} title="Facility" setModal={setModalVisible} />
      <View style={styles.whiteBox}>
        <Text style={styles.txt}> Add Facility Site</Text>
        <ScrollView>
          {multiStepForm()}
          <View
            style={{
              flexDirection: page > 0 ? "row" : "column",
              paddingHorizontal: "1.5%",
            }}
          >
            <View style={{ width: "50%" }}>
              {page > 0 && (
                <TouchableOpacity onPress={() => setPage(page - 1)}>
                  <View style={styles.btnBack}>
                    <Text style={styles.addBack}>Back</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
            <View style={{ width: page > 0 ? "50%" : "100%" }}>
              <TouchableOpacity onPress={handleSubmit}>
                <View
                  style={{
                    backgroundColor: "#309694",
                    borderRadius: 12,
                    paddingHorizontal: "2%",
                    alignItems: "center",
                    paddingVertical: page > 0 ? "5%" : "3%",
                    justifyContent: "center",
                    marginBottom: page > 0 ? "12%" : "7%",
                    marginHorizontal: page > 0 ? "8%" : "4.5%",
                  }}
                >
                  <Text style={styles.addSite}>
                    {page === 0 || page === 1 ? "Next" : "Submit"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(AddFacility);

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  whiteBox: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: "5%",
    borderRadius: 25,
    marginBottom: "5%",
    marginTop: "3%",
  },
  txt: {
    fontSize: RFPercentage(2.3),
    fontWeight: "bold",
    color: "#023D26",
    textAlign: "center",
    paddingVertical: "6%",
  },
  addSite: {
    fontSize: RFPercentage(1.9),
    fontWeight: "bold",
    color: "#fff",
    paddingLeft: "2%",
  },
  btnBack: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: "2%",
    alignItems: "center",
    paddingVertical: "4.2%",
    justifyContent: "center",
    marginBottom: "12%",
    marginHorizontal: "8%",
    borderWidth: 1.5,
    borderColor: "#309694",
  },
  addBack: {
    fontSize: RFPercentage(1.9),
    fontWeight: "bold",
    color: "#309694",
    paddingLeft: "2%",
  },
});
