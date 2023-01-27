import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Occupant from "./Occupant";

export default function AddStep3({formData, setFormData}) {
  return (
    <View>
      <Occupant formData={formData} setFormData={setFormData} />
    </View>
  );
}
