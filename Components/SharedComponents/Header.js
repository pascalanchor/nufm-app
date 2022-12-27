import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import NUFM from "../../assets/NUFM-Green.png";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Header({ title, setModal }) {
  return (
    <View style={styles.container}>
      <View style={styles.subCont}>
        <TouchableOpacity onPress={() => setModal(true)}>
          <Entypo name="menu" size={26} color="#023D26" />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Ionicons name="notifications-outline" size={26} color="#023D26" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: RFPercentage(2.7),
    fontWeight: "bold",
    color: "#023D26",
  },
  subCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "18%",
    paddingHorizontal: "7%",
    width: "100%",
    backgroundColor: "#EAEAEA",
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#EAEAEA",
    marginBottom: "5%",
  },
  img: {
    width: 120,
    height: 50,
  },
});
