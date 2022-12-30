import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function IncidentDetails() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subCont}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            marginBottom: "4%",
          }}
        >
          <TouchableOpacity>
            <AntDesign
              name="close"
              size={24}
              color="#898989"
              style={styles.close}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.txtInput}>
          <Text style={styles.txt}>Sender</Text>
          <View style={styles.disabledInput}>
            <Text style={styles.txtInside}></Text>
          </View>
        </View>
        <View style={styles.txtInput}>
          <Text style={styles.txt}>Sites</Text>
          <View style={styles.disabledInput}>
            <Text style={styles.txtInside}></Text>
          </View>
        </View>
        <View style={styles.txtInput}>
          <Text style={styles.txt}>Facility</Text>
          <View style={styles.disabledInput}>
            <Text style={styles.txtInside}></Text>
          </View>
        </View>
        <View style={styles.txtInput}>
          <Text style={styles.txt}>Task</Text>
          <View style={styles.disabledInput}>
            <Text style={styles.txtInside}></Text>
          </View>
        </View>
        <View style={styles.txtInput}>
          <Text style={styles.txt}>Incident</Text>
          <View style={styles.txtarea}>
            <Text style={styles.txtInside}></Text>
          </View>
        </View>
        <View style={styles.txtInput}>
          <Text style={styles.txt}>Note</Text>
          <View style={styles.txtarea}>
            <Text style={styles.txtInside}></Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backbtn}>
            <Text style={{ color: "#023D26", fontWeight: "bold" }}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "7%",
  },
  subCont: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 25,
    aspectRatio: 0.67 / 1,
    width: "100%",
    paddingHorizontal: "6%",
    paddingVertical: "5%",
  },
  txtInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    marginVertical: "2.5%",
  },
  disabledInput: {
    aspectRatio: 7.9 / 1,
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    width: "80%",
    justifyContent: "center",
    marginLeft: "2%",
    paddingLeft: "2%",
  },
  txt: {
    color: "#023D26",
    fontSize: RFPercentage(1.6),
    fontWeight: "bold",
  },
  txtInside: {
    color: "#535353",
    fontSize: RFPercentage(1.4),
    paddingLeft: "3%",
  },
  txtarea: {
    aspectRatio: 3 / 1,
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    width: "80%",
    justifyContent: "center",
    marginLeft: "2%",
    paddingLeft: "2%",
  },
  backbtn: {
    backgroundColor: "#B2E3D1",
    paddingVertical: "3.5%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "6%",
    borderRadius: 15,
  },
});
