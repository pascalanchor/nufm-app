import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-virtualized-view";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Senders({ link,searchVal }) {
  const navigation = useNavigation();
  const Senders = [
    { name: "Hussam Khaled", date: "28-09-2022", receiver: "Jana" },
    { name: "Jana Zreika", date: "28-09-2022", receiver: "Jana" },
    {
      name: "Samir Sam",
      date: "28-09-2022",
      receiver: "Jana",
    },
    {
      name: "Hussam Khaled99",
      date: "28-09-2022",
      receiver: "Jana",
    },
    {
      name: "Samir Sam44",
      date: "28-09-2022",
      receiver: "Jana",
    },
    {
      name: "Hussam Khaled22",
      date: "28-09-2022",
      receiver: "Jana",
    },
    {
      name: "Samir Sam33",
      date: "28-09-2022",
      receiver: "Jana",
    },
    {
      name: "Hussam Khaled28",
      date: "28-09-2022",
      receiver: "Jana",
    },
  ];
  const [SenderArr, setSenderArr] = useState([]);
  useEffect(() => {
    sortedArray();
  }, [searchVal]);
  const sortedArray = () => {
    setSenderArr(
      Senders.filter((cntr) =>
        cntr.name.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  return (
    <View style={styles.box}>
      <ScrollView>
        <FlatList
          keyExtractor={(item) => item.name}
          data={SenderArr && SenderArr.length > 0 ? SenderArr : Senders}
          numColumns={1}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate(link+"Sender")}>
                <View style={styles.senderContainer}>
                  <View style={styles.senderRec}>
                    <Text style={styles.txt}> {item.name}</Text>
                    <Text style={styles.receiver}> {item.receiver}</Text>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <AntDesign
                        name="close"
                        size={20}
                        color="#898989"
                        style={styles.close}
                      />
                    </TouchableOpacity>
                    <Text style={styles.date}>{item.date}</Text>
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
    paddingVertical: "2%",
  },
  senderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: "2%",
    paddingHorizontal: "4%",
    paddingVertical: "4%",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
  senderRec: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  receiver: {
    color: "#92BFAE",
    fontSize: RFPercentage(1.5),
    fontWeight: "bold",
    paddingTop: "1.5%",
  },
  txt: {
    color: "#535353",
    fontSize: RFPercentage(1.8),
    fontWeight: "bold",
  },
  date: {
    color: "#BCBCBC",
    paddingTop: "2%",
    fontSize: RFPercentage(1.4),
  },
  close: {
    textAlign: "right",
  },
});
