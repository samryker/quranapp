import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, BackHandler, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import logo from "../../assets/app_logo.png"
import BackButton from '../../components/BackButton'

import profilePic from "../../assets/ic_user.png"
import support from "../../assets/support.png"

import bookmark from "../../assets/bookmark.png"

import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';


const LanguageOption = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const onBookMarkPressed = () => {
    
    navigation.replace('BookList', { 
    })
     
  }

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => navigation.replace('LoginScreen') }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

    return (
        <ScrollView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#2D5C2E", marginTop: 15 }}>
  
          <View style={styles.RectangleShapeView}> 

          
          <View style={styles.buttonContainers}> 
          <TouchableOpacity onPress={onBookMarkPressed}>
            <Image source={bookmark} style = {styles.imageDimen} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>  navigation.replace('Profile')}>
            <Image source={profilePic} style = {styles.imageDimen} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.replace('Service')}>
            <Image source={support} style = {styles.imageDimen} />
          </TouchableOpacity>
          </View>
          
        
            <View style = {styles.container}>

              <Image style={[styles.logoDimen]} resizeMode='stretch' source={logo} />

            </View>

            <View style={styles.square}>

               <View style={styles.textContainer}>

                 <Text style={{ color: "#008037", fontSize: 24, textAlign: 'center', fontWeight: 'bold' }}>READ THE HOLY QURAN</Text>

               </View>

                 <Text style={{ color: "#6a737b", fontSize: 14, marginStart: 18, marginTop: 30, fontWeight: 'bold' }}>SELECT LANGUAGE</Text>

               

               <View style={styles.textContainer2}>

                 <Text style={{ color: "#6a737b", fontSize: 20, marginTop: 5, textAlign: 'center' }}>Arabic</Text>
                </View>

               <View style={styles.textContainer3}>

               <TouchableOpacity onPress={() =>  navigation.replace('PageList')} >
               <Text style={{ color: "#ffffff", fontSize: 20, marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}>English</Text>
               </TouchableOpacity>
               </View>

               <View style={styles.buttonContainer} >
              <TouchableOpacity onPress={() =>  navigation.replace('PageList')} style={styles.button} >
                <Text style={styles.buttonText}>READ</Text>  
              </TouchableOpacity> 

             </View>

            </View>

          </View>

        </View>
        </ScrollView>
     
    )
}

export default LanguageOption

const styles = StyleSheet.create({
    
RectangleShapeView: {
marginTop: "11%",
width: "90%",
height: 780,
backgroundColor: '#2D5C2E',
borderWidth: 3,
borderColor: '#ffbd59',
marginBottom: '11%'
},

container: {
justifyContent: 'center',
alignItems: 'center',
},

logoDimen: {
width: "50%",
height: "58%",
marginTop:"-12%"
},

imageDimen: {
  width: 50,
  height: 50,
  marginTop:5,
  marginRight:"10%"
},

square: {
  width: "80%",
  height: "38%",
  backgroundColor: "#a5acaf",
  marginTop: 5,
  marginStart: 28,
  borderRadius: 10,
  marginLeft:'10%',
  marginTop:"-10%"
},

textContainer: {
  backgroundColor: 'white',
  borderTopStartRadius: 10,
  borderTopEndRadius: 10,
  fontFamily: 'Quicksand_700Bold'
  
},

textContainer2: {
  backgroundColor: '#caccd1',
  marginTop: 5,
  height: 40,
  fontFamily: 'Quicksand_700Bold'
},

textContainer3: {
  backgroundColor: '#2D5C2E',
  marginTop: 10,
  height: 40,
  fontFamily: 'Quicksand_700Bold'
},

buttonContainers: {
  width: '100%',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: 40,
  marginTop:10,
  marginLeft:'0%',
  flexDirection: 'row',
  fontFamily: 'Quicksand_700Bold'
},

buttonContainer: {
  width: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 40,
  marginTop:10,
  marginLeft:'6%',
  flexDirection: 'row',
  fontFamily: 'Quicksand_700Bold'
},

button: {
  backgroundColor: '#2D5C2E',
  width: '100%',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  marginStart: 150
},

buttons: {
  backgroundColor: '#2D5C2E',
  width: '100%',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  marginStart: 150,
  marginLeft:"100%",
  marginRight: 15
},

buttons1: {
  backgroundColor: '#2D5C2E',
  width: '100%',
  padding: 15,
  borderRadius: 10,
  alignItems: 'center',
  marginStart: 150,
  marginLeft:"100%",
  marginRight: 15
},

buttonText: {
  color: '#ffbd59',
  fontWeight: '700',
  fontSize: 20,
},
      
})
