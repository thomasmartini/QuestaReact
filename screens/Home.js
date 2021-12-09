import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home({ navigation }) {
    return (
        <View style={styles.background}>
            {/* Weergave van de huidige in te vullen vragenlijst */}
            <Text style={styles.mainText}>
                Rotterdam
            </Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Question')}
            style={[styles.mainButton, styles.shadowProp, styles.elevation]}>
                <Text style={styles.mainText2}>
                    Ga naar je vragenlijst!
                </Text>
            </TouchableOpacity>
            {/* Weergave van de nog in te vullen vragenlijsten */}
            <Text style={styles.toFillText}>
                Nog in te vullen
            </Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Question')}
            style={[styles.toFillButton, styles.shadowProp, styles.elevation]}>
                <Text style={styles.toFillText2}>
                    Ga naar je vragenlijst!
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Question')}
            style={[styles.toFillButton, styles.shadowProp, styles.elevation]}>
                <Text style={styles.toFillText2}>
                    Ga naar je vragenlijst!
                </Text>
            </TouchableOpacity>

            {/* Weergave van de ingevulde vragenlijsten */}
            <Text style={styles.filledText}>
                Ingevuld
            </Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Question')}
            style={[styles.filledButton, styles.shadowProp, styles.elevation]}>
                <Text style={styles.filledText2}>
                    Ga naar je vragenlijst!
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Question')}
            style={[styles.filledButton, styles.shadowProp, styles.elevation]}>
                <Text style={styles.filledText2}>
                    Ga naar je vragenlijst!
                </Text>
            </TouchableOpacity>
        </View>  
    );
    
    }

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#2B50EC",
    },

    mainText:{
        marginTop: 10,
        fontSize: 40,
        color: "#fff",
    },

    mainButton:{
        marginTop: 10,
        width: "90%",
        height: 80,
        backgroundColor: "#111329",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },

    mainText2:{
        color: "#fff",
        fontFamily: "sans-serif-condensed",
        fontSize: 22,
    },

    toFillText:{
        marginTop: 20,
        fontSize: 30,
        color: "#fff",
    },

    toFillButton:{
        marginTop: 10,
        width: "90%",
        height: 80,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },

    toFillText2:{
        color: "#111329",
        fontFamily: "sans-serif-condensed",
        fontSize: 22,
    },

    filledText:{
        marginTop: 20,
        fontSize: 30,
        color: "#fff",
    },

    filledButton:{
        marginTop: 10,
        width: "90%",
        height: 80,
        backgroundColor: "#1CA883",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },

    filledText2:{
        color: "#fff",
        fontFamily: "sans-serif-condensed",
        fontSize: 22,
    },

    shadowProp:{
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    elevation: {
        elevation: 5,
        shadowColor: 'black',
      },
})

export default Home;