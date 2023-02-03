import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default function Buttons({ text, onPress, loading }) {
  return (
    <TouchableOpacity onPress={onPress}>
      {!loading ? (
        <View style={styles.container}>
          <Text style={styles.text}>{text}</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>{text}...</Text>
          <ActivityIndicator size="small" color="#fff" />
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "87%",
    aspectRatio: 6.8 / 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "6%",
    backgroundColor: "#023D26",
    borderRadius: 12,
    flexDirection:"row"
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: RFPercentage(2),
    textAlign: "center",
  },
});
