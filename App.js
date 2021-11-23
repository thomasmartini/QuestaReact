import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  StyleSheet,
  SafeAreaView,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  Button,
  Alert,
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  const {landscape} = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>

      <View
      style={{ 
        backgroundColor: "dodgerblue",
        width: "100%",
        height: landscape ? '100%' : "30%", 
      }}
      ></View>
      {/* <TouchableOpacity onPress={() => console.log('image tapped')}>
        <Image style={styles.logo} source={require("./assets/questa.png")}/>
      </TouchableOpacity>

      <Button
        title="Click Me"
        color="#05a36e"
        onPress={() => Alert.alert("My title", "My message", [
          { text: "Yes", onPress: () => console.log("Yes") },
          { text: "No", onPress: () => console.log("No") },
          ])
        }
      /> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 20,
    width: 250,
    height: 300,
  },
});
