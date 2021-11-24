import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function HomePage(props) {
    return (
        <View style={styles.background}>
            <View style={styles.section} >
                <Text style={styles.textbody}>
                    Je bent nu op Rotterdam Centraal, vul alstublieft dit formulier in.
                </Text>
                <View style={styles.section2}>
                    <Text style={styles.textbody2}>
                        Rotterdam Centraal
                    </Text>
                    <Text style={styles.textbody2}>
                        Accessibility | 2/4 Vragenlijsten
                    </Text>
                </View>
            </View>
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

    section:{
        top: 90,
        width: "100%",
        height: 180,
        backgroundColor: "#fff",
        alignItems: "center",
    },

    textbody:{
        top: 10,
        color: "#2B50EC",
    },

    section2:{
        top: 20,
        width: "80%",
        height: 80,
        backgroundColor: "#2B50EC",
        alignItems: "center",
        justifyContent: "center",
    },

    textbody2:{
        top: 10,
        color: "#fff",
    },
})

export default HomePage;