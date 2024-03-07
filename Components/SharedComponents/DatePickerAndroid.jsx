import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DatePickerAndroid({ label, handleOnChange, name }) {

  useEffect(()=>{
    
    // handleOnChange(name,date)
  }, [date])
  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  function showDatePicker() {
    setDatePicker(true);
  }

  function onDateSelected(event, value) {
    handleOnChange(name,value)
    setDatePicker(false);
    setDate(value);
  }
  return (
    <View>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TouchableOpacity onPress={showDatePicker}>
      <View style={styles.input}>
    <Text style={styles.date}>
      {`${date.getDate() < 10 ? '0' : ''}${date.getDate()}/${
        date.getMonth() + 1 < 10 ? '0' : ''
      }${date.getMonth() + 1}/${date.getFullYear()}`}
    </Text>
  </View>
</TouchableOpacity>

      {/*
      
      <TouchableOpacity onPress={showDatePicker}>
        <View style={styles.input}>
          <Text style={styles.date}>{date.toLocaleString().substr(0, 10)}</Text>
        </View>
      </TouchableOpacity>

  */}
      {datePicker && (
        <DateTimePicker
          value={date}
          mode={"date"}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          is24Hour={true}
          onChange={onDateSelected}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: "100%",
    // aspectRatio: 8.6 / 1,
    // paddingVertical:"1.2%",
    height:45,
    backgroundColor: "#F1F1F1",
    borderRadius: 12,
    paddingLeft: "4%",
    marginTop: "1%",
    fontSize: RFPercentage(1.5),
    justifyContent: "center",
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "8%",
  },
  subCont: {
    flexDirection: "column",
    width: "90%",
    marginTop: "4%",
  },
  label: {
    paddingLeft: "1.5%",
    fontWeight: "bold",
    color: "#595959",
    fontSize: RFPercentage(1.5),
  },
  date: {
    fontSize: RFPercentage(1.47),
    color: "#595959",
  },
});
