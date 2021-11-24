import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './screens/HomePage';

function MainScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function HomeScreen() {
  return (
    <HomePage></HomePage>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: "#fff",
  },
  logo:{
      width: 106,
      height: 128,
  },
  logoContainer:{
      position: "absolute",
      top: 70,
      alignItems: "center",
  },
  loginButton: {
      width: "100%",
      height: 70,
      backgroundColor: "#121329",
  },
  registerButton: {
      width: "100%",
      height: 70,
      backgroundColor: "#21a983",
  }
})

export default App;
