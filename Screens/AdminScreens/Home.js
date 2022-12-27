import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { ScrollView } from "react-native-virtualized-view";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import CMenu from "../../Components/SharedComponents/CMenu";
import Header from "../../Components/SharedComponents/Header";
import Cards from "../../Components/SharedComponents/Cards";
import Facility from "../../assets/Facility.png";
import Worker from "../../assets/Worker.png";
import Safety from "../../assets/Safety.png";
import Task from "../../assets/Task.png";
import Contractor from "../../assets/Contractor.png";
import Attendance from "../../assets/Attendance.png";
import Project from "../../assets/Project.png";
import Invoice from "../../assets/Invoice.png";
import Budget from "../../assets/Budget.png";
import Reports from "../../assets/Reports.png";
import Equipments from "../../assets/Equipments.png";
import Vendors from "../../assets/Vendors.png";
import Contracts from "../../assets/Contracts.png";

export default function Home({ props }) {
  const [modalVisible, setModalVisible] = useState(false);
  const CardItems = [
    { name: "Facility Management", icon: Facility },
    { name: "Worker Management", icon: Worker },
    {
      name: "Safety Material Management",
      icon: Safety,
    },
    { name: "Task Management", icon: Task },
    { name: "Contractor Management", icon: Contractor },
    { name: "Attendance Management", icon: Attendance },
    { name: "Project Management", icon: Project },
    { name: "Invoice", icon: Invoice },
    { name: "Budget Management", icon: Budget },
    { name: "Reports Management", icon: Reports },
    { name: "Equipments Management", icon: Equipments },
    { name: "Vendors Management", icon: Vendors },
    { name: "Contracts Management", icon: Contracts },
  ];

  return (
    <View style={styles.box}>
      <View style={styles.menu}>
        <CMenu modalVisible={modalVisible} setModal={setModalVisible} />
      </View>
      <Header title="Home" setModal={setModalVisible} />
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            keyExtractor={(item) => item.name}
            data={CardItems}
            numColumns={1}
            renderItem={({ item }) => {
              return <Cards name={item.name} icon={item.icon} />;
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    // position: "absolute",
  },
  box: {
    backgroundColor: "#EAEAEA",
    // position: "relative",
    height: "100%",
  },
  container: {
    backgroundColor: "#EAEAEA",
    paddingBottom: "31%",
  },
});
