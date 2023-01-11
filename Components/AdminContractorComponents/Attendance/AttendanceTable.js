import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-virtualized-view";
import { useNavigation } from "@react-navigation/native";

export default function AttendanceTable({ searchVal, link }) {
  const navigation = useNavigation();
  const Attendances = [
    {
      name: "Attendance one",
      Facility: "Fac1",
      Email: "janjoune.97@hotmail.com",
    },
    {
      name: "Attendance two",
      Facility: "Fac2236",
      Email: "Nufm@gmail.com",
    },
    {
      name: "Attendance three",
      Facility: "Fac2236",
      Email: "janjoune.97@hotmail.com",
    },
    {
      name: "Attendance four",
      Facility: "Fac2236",
      Email: "Nufm@gmail.com",
    },
    {
      name: "Attendance five",
      Facility: "Fac2236",
      Email: "Nufm@gmail.com",
    },
    {
      name: "Attendance six",
      Facility: "Fac2236",
      Email: "Nufm@gmail.com",
    },
  ];

  const [AttendancesArr, setAttendancesArr] = useState([]);
  useEffect(() => {
    sortedArray();
  }, [searchVal]);
  const sortedArray = () => {
    setAttendancesArr(
      Attendances.filter((cntr) =>
        cntr.name.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };
  return (
    <View style={styles.box}>
      <ScrollView>
        <FlatList
          keyExtractor={(item) => item.name}
          ListHeaderComponent={() => {
            return (
              <View style={styles.listhead}>
                <View style={styles.headTitle}>
                  <Text style={styles.header1}>Name</Text>
                </View>
                <View style={styles.headTitle}>
                  <Text style={styles.header2}>Facility</Text>
                </View>
                <View style={styles.headTitle3}>
                  <Text style={styles.header3}>Email </Text>
                </View>
              </View>
            );
          }}
          data={
            AttendancesArr && AttendancesArr.length > 0
              ? AttendancesArr
              : Attendances
          }
          numColumns={1}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={()=>navigation.navigate(link+"CheckAttendance")}>
                <View style={styles.AttendanceContainer}>
                  <View style={styles.details}>
                    <Text style={styles.txt}> {item.name}</Text>
                  </View>
                  <View style={styles.details}>
                    <Text style={styles.Facility}>{item.Facility}</Text>
                  </View>
                  <View style={styles.details3}>
                    <Text style={styles.Email}>{item.Email}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
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
    marginBottom: "8%",
    marginTop: "3%",
  },
  txt: {
    fontSize: RFPercentage(1.9),
    fontWeight: "bold",
    color: "#023D26",
    padding: "5%",
  },
  listhead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "3%",
    borderBottomWidth: 1,
    borderBottomColor: "#ECEAEA",
    paddingHorizontal: "5%",
  },
  headTitle: {
    width: "30%",
    alignItems: "center",
  },
  headTitle3: {
    width: "40%",
    alignItems: "center",
  },
  header1: {
    fontWeight: "bold",
    fontSize: RFPercentage(1.5),
    color: "#535353",
    width: "100%",
    textAlign: "left",
  },
  header2: {
    fontWeight: "bold",
    fontSize: RFPercentage(1.5),
    color: "#535353",
    width: "100%",
    textAlign: "left",
    paddingLeft: "8%",
  },
  header3: {
    fontWeight: "bold",
    fontSize: RFPercentage(1.5),
    color: "#535353",
    width: "100%",
    textAlign: "left",
  },
  AttendanceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ECEAEA",
    paddingVertical: "6%",
    paddingHorizontal: "4%",
  },
  txt: {
    color: "#9A9999",
    fontSize: RFPercentage(1.3),
    textAlign: "left",

    width: "100%",
  },
  Email: {
    color: "#9A9999",
    fontSize: RFPercentage(1.3),
    width: "100%",
    textAlign: "left",
  },
  Facility: {
    color: "#9A9999",
    fontSize: RFPercentage(1.3),
    width: "100%",
    textAlign: "left",
    paddingLeft: "10%",
  },
  details: { width: "30%", alignItems: "center" },
  details3: { width: "40%", alignItems: "center" },
});
