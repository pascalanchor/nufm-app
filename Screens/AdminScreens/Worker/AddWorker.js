import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-virtualized-view";
import CMenu from "../../../Components/SharedComponents/CMenu";
import Header from "../../../Components/SharedComponents/Header";
import AddForm from "../../../Components/AdminContractorComponents/Worker/AddForm";

export default function AddWorker() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.box}>
      <View>
        <CMenu modalVisible={modalVisible} setModal={setModalVisible} />
      </View>
      <Header title="Worker" setModal={setModalVisible} />
      <View style={styles.whiteBox}>
        <Text style={styles.txt}> Add Worker</Text>
        <ScrollView>
          <AddForm />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  whiteBox: {
    display: "flex",
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
});
