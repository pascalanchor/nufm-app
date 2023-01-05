import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-virtualized-view";
import CMenu from "../../../Components/SharedComponents/CMenu";
import Header from "../../../Components/SharedComponents/Header";
import AddForm from "../../../Components/AdminContractorComponents/Facility/AddForm";
import AddStep2 from "../../../Components/AdminContractorComponents/Facility/AddStep2";
import AddStep3 from "../../../Components/AdminContractorComponents/Facility/AddStep3";

export default function AddFacility() {
  const [page, setPage] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const multiStepForm = () => {
    switch (page) {
      case 0:
        return <AddForm />;
      case 1:
        return <AddStep2 />;
      case 2:
        return <AddStep3 />;
      default:
        return <AddForm />;
    }
  };
  function handleSubmit() {
    setPage(page + 1);
  }
  return (
    <View style={styles.box}>
      <View>
        <CMenu modalVisible={modalVisible} setModal={setModalVisible} />
      </View>
      <Header title="Facility" setModal={setModalVisible} />
      <View style={styles.whiteBox}>
        <Text style={styles.txt}> Add Facility Site</Text>
        <ScrollView>{multiStepForm()}</ScrollView>
      
      </View>
      <View style={{ flexDirection: page > 0 ? "row" : "column", paddingHorizontal:"1.5%" }}>
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
                  backgroundColor: "#B2E3D1",
                  borderRadius: 15,
                  paddingHorizontal: "2%",
                  alignItems: "center",
                  paddingVertical: page > 0 ? "6%" : "3%",
                  justifyContent: "center",
                  marginBottom: page > 0 ? "12%" : "7%",
                  marginHorizontal: page > 0 ? "10%" : "5%",
                }}
              >
                <Text style={styles.addSite}>
                  {page === 0 || page === 1 ? "Next" : "Submit"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

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
    color: "#023D26",
    paddingLeft: "2%",
  },
  btnBack: {
    flexDirection: "row",
    backgroundColor: "#B2E3D1",
    borderRadius: 15,
    paddingHorizontal: "2%",
    alignItems: "center",
    paddingVertical: "6%",
    justifyContent: "center",
    marginBottom: "12%",
    marginHorizontal: "10%",
  },
  addBack: {
    fontSize: RFPercentage(1.9),
    fontWeight: "bold",
    color: "#023D26",
    paddingLeft: "2%",
  },
});
