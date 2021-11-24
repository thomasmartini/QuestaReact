import React from 'react';
import { Text, View, Button } from 'react-native';

function QuestionnaireScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hier komt vragenlijst toch ik zweer</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
}

export default QuestionnaireScreen;