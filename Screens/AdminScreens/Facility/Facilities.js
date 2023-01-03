import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import CMenu from "../../../Components/SharedComponents/CMenu";
import Header from "../../../Components/SharedComponents/Header";

export default function Facilities() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.box}>
      <View>
        <CMenu modalVisible={modalVisible} setModal={setModalVisible} />
      </View>
      <Header title="Facility" setModal={setModalVisible} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  container: {
    paddingBottom: "35%",
  },
});
