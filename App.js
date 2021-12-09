import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import QuestionScreen from './screens/Question';
import QuestionScreen2 from './screens/Question2';
import QuestionScreen3 from './screens/Question3';
import QuestionScreen4 from './screens/Question4';
import QuestionScreen5 from './screens/Question5';
import QuestionScreen6 from './screens/Question6';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} />
        <Stack.Screen name="Question2" component={QuestionScreen2} />
        <Stack.Screen name="Question3" component={QuestionScreen3} />
        <Stack.Screen name="Question4" component={QuestionScreen4} />
        <Stack.Screen name="Question5" component={QuestionScreen5} />
        <Stack.Screen name="Question6" component={QuestionScreen6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;