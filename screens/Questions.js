import React from 'react';
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

function Questions({ navigation }) {
    return (
        <View style={styles.background}>
            <View style={styles.questionBackground}>
                <Text style={styles.questionTitle}>
                    Vraag 1
                </Text>
                <Text style={styles.questionBody}>
                    Hoe was je ervaring van Rotterdam Centraal?
                </Text>
            </View>
            <TextInput style={styles.inputField} />
            <TouchableOpacity onPress={() => navigation.navigate('Home')}><Image style={styles.camera}  source={require('../assets/icons/camera.png')} /></TouchableOpacity>
            <TouchableOpacity><Image style={styles.microphone} source={require('../assets/icons/microphone.png')} /></TouchableOpacity>
        </View>
        );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    questionBackground:{
        width: "100%",
        height: "50%",
        backgroundColor: "#111329",
    },
    questionTitle:{
        textAlign: "center",
        paddingTop: 40,
        fontSize: 30,
        color: "white",
    },
    questionBody:{
        textAlign: "center",
        paddingTop: 75,
        fontSize: 30,
        color: "white",
    },
    inputField:{
        marginTop: 20,
        borderColor: "#111329",
        borderWidth: 2,
        borderRadius: 3,
        width: "80%",
    },
    camera:{
        width: 50,
        height: 50,
    },
    microphone:{
        width: 50,
        height: 50,
    },
})

export default Questions;	