import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginNavigation from './Navigation/LoginNavigation/LoginNavigation'

export default function App() {
  return (
    <View style={styles.container}>
      <LoginNavigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
