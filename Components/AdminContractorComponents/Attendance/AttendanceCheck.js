import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function AttendanceCheck() {
  return (
    <View style={styles.container}>
      <View style={styles.boxIcon}>
        <View style={styles.greyBox}>
            <Text style={styles.Check}>Check In</Text>
            <Text style={styles.datetime}>2 Dec / 1:00 am</Text>
        </View>
        <Ionicons name="location" size={30} color="#023D26" />
      </View>
      <View style={styles.boxIcon}>
        <View style={styles.greyBox}>
        <Text style={styles.Check}>Check Out</Text>
            <Text style={styles.datetime}>13 Jan / 2:00 pm</Text>
        </View>
        <Ionicons name="location" size={30} color="#023D26" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: "6%",
  },
  boxIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greyBox: {
    aspectRatio: 4.5 / 1,
    backgroundColor: "#F0F0F0",
    width: "85%",
    borderRadius: 15,
    marginRight: "2%",
    marginVertical: "3%",
    flexDirection:"column",
    paddingHorizontal:"6%",
    paddingVertical:"2%",
    justifyContent:"center"
  },
  datetime:{
    fontSize: RFPercentage(1.35),
    paddingTop:"1.5f%",
    color: "#676767",
  },
  Check:{
    fontSize: RFPercentage(1.8),
    color:"#023D26",
    fontWeight:"bold",
    
  }
});
