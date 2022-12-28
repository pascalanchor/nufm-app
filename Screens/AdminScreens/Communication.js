import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-virtualized-view";

import CMenu from "../../Components/SharedComponents/CMenu";
import Header from "../../Components/SharedComponents/Header";
import SearchInput from "../../Components/SharedComponents/SearchInput";
import TabPannel from "../../Components/AdminContractorComponents/Communication/TabPannel";

export default function Communication() {
  const [searchVal, setSearchVal] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.box}>
      <View>
        <CMenu modalVisible={modalVisible} setModal={setModalVisible} />
      </View>
      <Header title="Communication" setModal={setModalVisible} />
      <View style={styles.whiteBox}>
        <Text style={styles.txt}> New Messages</Text>
        <SearchInput setSearchVal={setSearchVal} />
        <TabPannel searchVal={searchVal} />
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
    marginBottom:"8%",
    marginTop:"3%"
  },
  txt: {
    fontSize: RFPercentage(1.9),
    fontWeight: "bold",
    color: "#023D26",
    padding: "5%",
  },
});
