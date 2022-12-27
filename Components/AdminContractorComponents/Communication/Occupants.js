import React from 'react'
import { StyleSheet, Text, View, Image } from "react-native";


export default function Occupants() {
  return (
    <View style={styles.box}>
        <Text>Occupants</Text>
        </View>
  )
}
const styles = StyleSheet.create({
box: {
  backgroundColor: "#fff",
  flex:1,
  borderBottomLeftRadius:25,
  borderBottomRightRadius:25}

});