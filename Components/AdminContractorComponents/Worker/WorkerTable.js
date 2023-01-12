import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-virtualized-view";

export default function WorkerTable({ searchVal }) {
  const Workers = [
    {
      name: "Worker one",
      spec: "Cleaner",
      phone: "78768345",
    },
    {
      name: "Worker two",
      spec: "Driver",
      phone: "78768123",
    },
    {
      name: "Worker three",
      spec: "Driver",
      phone: "9796767",
    },
    {
      name: "Worker four",
      spec: "Driver",
      phone: "78768123",
    },
    {
      name: "Worker five",
      spec: "Driver",
      phone: "78768123",
    },
    {
      name: "Worker six",
      spec: "Driver",
      phone: "78768123",
    },
  ];

  const [WorkersArr, setWorkersArr] = useState([]);
  useEffect(() => {
    sortedArray();
  }, [searchVal]);
  const sortedArray = () => {
    setWorkersArr(
      Workers.filter((cntr) =>
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
                  <Text style={styles.header1}>Worker Name</Text>
                </View>
                <View style={styles.headTitle}>
                  <Text style={styles.header2}>Specilization</Text>
                </View>
                <View style={styles.headTitle}>
                  <Text style={styles.header3}>Phone Number</Text>
                </View>
              </View>
            );
          }}
          data={WorkersArr && WorkersArr.length > 0 ? WorkersArr : Workers}
          numColumns={1}
          renderItem={({ item }) => {
            return (
              <View style={styles.FacilityContainer}>
                <View style={styles.details}>
                  <Text style={styles.txt}> {item.name}</Text>
                </View>
                <View style={styles.details}>
                  <Text style={styles.spec}>{item.spec}</Text>
                </View>
                <View style={styles.details}>
                  <Text style={styles.phone}>{item.phone}</Text>
                </View>
              </View>
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
    paddingHorizontal: "6%",
  },
  headTitle: {
    width: "33%",
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
    paddingLeft: "10%",
  },
  header3: {
    fontWeight: "bold",
    fontSize: RFPercentage(1.5),
    color: "#535353",
    width: "100%",
    textAlign: "left",
    paddingLeft: "10%",
  },
  FacilityContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ECEAEA",
    paddingVertical: "6%",
    paddingHorizontal: "5.5%",
  },
  txt: {
    color: "#9A9999",
    fontSize: RFPercentage(1.4),
    textAlign: "left",

    width: "100%",
  },
  phone: {
    color: "#9A9999",
    fontSize: RFPercentage(1.4),

    width: "100%",
    textAlign: "left",
    paddingLeft: "10%",
  },
  spec: {
    color: "#9A9999",
    fontSize: RFPercentage(1.4),

    width: "100%",
    textAlign: "left",
    paddingLeft: "10%",
  },
  details: { width: "33%", alignItems: "center" },
});