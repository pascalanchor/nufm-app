import React, { useState, useEffect } from "react";
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
import { connect } from "react-redux";
import * as GetRisksActionCreator from "../../../Store/ActionCreator/Risk/GetRisksActionCreator";

function Risks({ link, searchVal, Risks, getRisks, error }) {

  const navigation = useNavigation();
  const [RiskArr, setRiskArr] = useState([]);

  useEffect(() => {
    getRisks();
    sortedArray();
  }, [searchVal]);
  
  const sortedArray = () => {
    setRiskArr(
      Risks.filter((cntr) =>
        cntr.name.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };

  return (
    <View style={styles.box}>
      <ScrollView>
        <FlatList
          keyExtractor={(item) => item.name}
          data={RiskArr && RiskArr.length > 0 ? RiskArr : Risks}
          numColumns={1}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate(link + "RiskDet")}
              >
                <View style={styles.senderContainer}>
                  <View style={styles.senderRec}>
                    <Text style={styles.txt}> {item.name}</Text>
                    <Text style={styles.receiver}> {item.facilityName}</Text>
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
const mapStateToProps = (state) => {
  return {
    Risks: state.GetRisksR.Risks,
    error: state.GetRisksR.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRisks: () => dispatch(GetRisksActionCreator.getRisks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Risks);

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
