import React, { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, Pressable, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Speech from 'expo-speech';


function Question({ navigation }) { 
    const [shouldShow, setShouldShow] = useState(null);
    //tts
    const speak = () => {
        const thingToSay = 'Hoe was je ervaring van Rotterdam Centraal?';
        Speech.speak(thingToSay, {language: "nl-NL",});
        console.log(Speech.getAvailableVoicesAsync)
      };

    //setting the state for the camera and file sorting
    const [image, setImage] = useState(null);
    const [imageCam, setImageCam] = useState(null);

    //the alert for asking to take a picture of pick a photo from your storage
    const alertPhoto = () =>
    Alert.alert(
      "Kies je upload methode",
      "Kies een al genomen foto, of neem een foto via de app",
      [
        {
          text: "Kies",
          onPress: () => pickImage(),
        },
        { text: "Neem", 
        onPress: () => takeImage(), 
        }
      ]
    );
    

    // checking permissions
    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.getCameraPermissionsAsync();
        }
      })();
    }, []);
  
    //the function for picking an image from your files
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    //the function for taking a picture
    const takeImage = async () => {
        let result2 = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
  
      console.log(result2);
  
      if (!result2.cancelled) {
        setImageCam(result2.uri);
      }
    };
    return (
        <ScrollView contentContainerStyle={styles.ScrollView}>
            <View style={styles.questionBackground}>
                <Text style={styles.questionTitle}>
                    Vraag 1
                </Text>
                <Text style={styles.questionBody}>
                  Kon je de winkel vinden? Hoe is de route hiernaar toe?
                </Text>
                {shouldShow ?
                  (   
                    <Image style={styles.microphoneRed} source={require('../assets/icons/microphoneRed.png')} />
                ) : true}
            </View>
                <TextInput style={styles.inputField} />
            <View style={styles.iconRow}>
                <TouchableOpacity onPress={alertPhoto}><Image style={styles.camera}  source={require('../assets/icons/camera.png')} /></TouchableOpacity>
                <TouchableOpacity onPressIn={() => setShouldShow(!shouldShow)} onPressOut={() => setShouldShow(!shouldShow)}><Image style={styles.microphone} source={require('../assets/icons/microphone.png')} /></TouchableOpacity>
            </View>
            <Pressable style={styles.buttonNext} onPress={() => navigation.navigate('Question2')}>
              <Text style={styles.textButton}>Volgende Vraag</Text>
            </Pressable>
            <View style={styles.iconRow}>
                {imageCam && <Image source={{ uri: imageCam }} style={{ width: 200, height: 200 }} />}
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
        </ScrollView>
        );
}

const styles = StyleSheet.create({
    ScrollView: {
        flexGrow: 1,
        maxHeight: "150%",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fff",
        overflow: "scroll",
    },
    background: {
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
        paddingLeft: 8,
        marginTop: 20,
        borderColor: "#111329",
        borderWidth: 2,
        borderRadius: 3,
        width: "80%",
    },
    iconRow:{
        flexDirection: 'row',
        marginTop: 10,
    },
    buttonNext:{
      marginTop: 30,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      width: "80%",
      backgroundColor: '#111329',
    },
    textButton:{
      fontSize: 16,
      lineHeight: 21,
      letterSpacing: 0.25,
      color: 'white',
    },
    camera:{
        width: 50,
        height: 50,
        marginRight: 25,
    },
    microphone:{
        width: 50,
        height: 50,
        marginLeft: 25,
    },
    microphoneRed:{
      marginTop: 20,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignSelf: 'center',  
  },
})

export default Question;	