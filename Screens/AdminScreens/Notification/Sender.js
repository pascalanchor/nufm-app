import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CMenu from "../../../Components/SharedComponents/CMenu";
import Header from "../../../Components/SharedComponents/Header";
import SenderDetails from "../../../Components/AdminContractorComponents/Notification/SenderDetails.js";

export default function Sender() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View>
        <CMenu modalVisible={modalVisible} setModal={setModalVisible} />
      </View>
      <Header title="Notification" setModal={setModalVisible} />
      <View style={{ marginVertical:"10%"}}>
      <SenderDetails />
      </View>
    </View>
  );
}
