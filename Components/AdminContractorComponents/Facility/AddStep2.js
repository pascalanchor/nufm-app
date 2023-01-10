import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import WorkSchedule from "./WorkSchedule";
import PrimaryContact from "./PrimaryContact"
export default function AddStep2() {
  return (
    <View>
      <WorkSchedule />
      <PrimaryContact/>
    </View>
  );
}

const styles = StyleSheet.create({});
