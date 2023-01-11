import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import WorkSchedule from "./WorkSchedule";
import PrimaryContact from "./PrimaryContact";
export default function AddStep2({formData, setFormData}) {
  return (
    <View>
      <WorkSchedule />
      <PrimaryContact />
    </View>
  );
}
