import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Linking } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native-virtualized-view";
import Avatar from "../../../assets/avatar.png";

export default function Workers({ searchVal }) {
  const Workers = [
    {
      name: "Hussam Khaled",
      icon: Avatar,
      date: "28-09-2022",
      time: "9:00AM",
      phone: "70580011",
    },
    {
      name: "Jana Zreika",
      icon: Avatar,
      date: "28-09-2022",
      time: "9:00AM",
      phone: "03358475",
    },
    {
      name: "Tarek Zreika",
      icon: Avatar,
      date: "28-09-2022",
      time: "9:00AM",
      phone: "70322027",
    },
    {
      name: "Hussam Khaled2",
      icon: Avatar,
      date: "28-09-2022",
      time: "9:00AM",
      phone: "70580011",
    },
    {
      name: "Jana Zreika9",
      icon: Avatar,
      date: "28-09-2022",
      time: "9:00AM",
      phone: "03358475",
    },
    {
      name: "Samir Sam7",
      icon: Avatar,
      date: "28-09-2022",
      time: "9:00AM",
      phone: "70322027",
    },
    {
      name: "Hussam Khaled4",
      icon: Avatar,
      date: "28-09-2022",
      time: "9:00AM",
      phone: "70580011",
    },
    {
      name: "Jana Zreika7",
      icon: Avatar,
      date: "28-09-2022",
      time: "9:00AM",
      phone: "03358475",
    },
    {
      name: "Samir Sam9",
      icon: Avatar,
      date: "28-09-2022",
      time: "9:00AM",
      phone: "70322027",
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
          data={
            WorkersArr && WorkersArr.length > 0
              ? WorkersArr
              : Workers
          }
          numColumns={1}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity  onPress={()=>{Linking.openURL(
                'http://api.whatsapp.com/send?phone=' + item.phone)}}
              >
              <View style={styles.workerContainer}>
                <View style={styles.workerImg}>
                  <Image source={item.icon} style={styles.img} />
                  <Text style={styles.txt}> {item.name}</Text>
                </View>
                <View>
                  <Text style={styles.time}>{item.time}</Text>
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
    backgroundColor: "#fff",
    flex: 1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingVertical: "2%",
  },
  img: {
    width: 50,
    height: 50,
  },
  workerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: "4%",
    paddingHorizontal: "4%",
  },
  workerImg: {
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    color: "#535353",
    paddingLeft: "3%",
    fontSize: RFPercentage(1.7),
    fontWeight: "bold",
  },
  date: {
    color: "#BCBCBC",
    paddingTop: "2%",
    fontSize: RFPercentage(1.4),
  },
  time: {
    color: "#A2A2A2",
    fontSize: RFPercentage(1.4),
    textAlign: "right",
  },
});
