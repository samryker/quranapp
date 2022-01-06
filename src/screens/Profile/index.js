import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, BackHandler, Alert } from 'react-native'
import profilePic from "../../assets/ic_add_pic.png"
import BackButton from '../../components/BackButton'
import axios from 'axios'

import Firebase from '../../config/firebase';
import { ScrollView } from 'react-native-gesture-handler'

import global from '../global';

const Profile = ({ navigation }) => {

  //var user = Firebase.auth().currentUser;

  var user = Firebase.auth().currentUser;


  console.log("email","email");

  console.log(global.email);
  console.log(global.password);

  //console.log("email",user.email);

/*
if (user) {
  // User is signed in.
  if (user != null) {
    //name = user.displayName;
    email = user.email;
    
    //photoUrl = user.photoURL;
    //emailVerified = user.emailVerified;
    //uid = user.uid;  
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
  }

  console.log("email",email);
} else {
  // No user is signed in.
}
*/

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => navigation.replace('LangOption') }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const apiUrl = 'https://globalworldcompany.co.in/grocery_apis/get_user_detail.php';

  var basicAuth = 'Content-Type: application/json' + 'Access-Control-Allow-Origin:*' + 'Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE' + 'Access-Control-Allow-Headers : X-Requested-With';
  
  /*
  axios({
    method: 'get',
    mode: 'no-cors',
    headers : {
      "Content-Type" : "application/json",
      "Access-Control-Allow-Headers" : "Content-Type",
      //"Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Origin" : "http://localhost:19006/",
      "Access-Control-Allow-Credentials" : true,
      "Access-Control-Allow-Methods" : "GET",
      "Access-Control-Allow-Headers" : "Origin, Content-Type, Accept",
    },    
    'Authorization' : + basicAuth,
    params: {
        "uid" : 'ranadip_ms@rediffmail.com',
        "pwd" : "rana123#"
    },
    url: apiUrl,
    responseType: 'json',
    }).then((res) => {
      console.log("yeh we have", res);
    })

    */
 
    return (
       <ScrollView>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#2D5C2E" }}>

          <View style={styles.RectangleShapeView}>
          
           <View style={{ flex: 1, justifyContent: "center" }}>               
               <Text style={{ color: '#ffffff', fontSize: 24, textAlign: 'center', fontWeight: 'bold', marginTop: 20 }}>PROFILE</Text>
            </View>

            <View style={styles.circle}>
              <Image style={[styles.imageDimen]} 
              source={profilePic} />
            </View>

            <View>
                 <Text style={{ color: "#ffffff", fontSize: 18, marginStart: 20, marginTop:30 }}>CONTACT</Text>
            </View>
            <View>
                 <Text style={{ color: "#ffffff", fontSize: 18, marginStart: 20, marginTop:30 }}>E-MAIL</Text>
            </View>
            <View style={styles.textContainer}>
                 <Text style={{ color: "#ffbd59", fontSize: 20, marginStart: 10 }}>{global.email}</Text>
            </View>

            <View>
                 <Text style={{ color: "#ffffff", fontSize: 18, marginStart: 20, marginTop:30 }}></Text>
            </View>
            <View style={styles.textContainer1}>
                 <Text style={{ color: "#008037", fontSize: 20, marginStart: 10 }}></Text>
            </View>

            <View>
                 <Text style={{ color: "#ffffff", fontSize: 18, marginStart: 20, marginTop:30 }}></Text>
            </View>
            <View style={styles.textContainer1}>
                 <Text style={{ color: "#008037", fontSize: 20, marginStart: 10 }}></Text>
            </View>

            <View>
                 <Text style={{ color: "#ffffff", fontSize: 18, marginStart: 20, marginTop:30 }}></Text>
            </View>
            <View style={styles.textContainer1}>
                 <Text style={{ color: "#008037", fontSize: 20, marginStart: 10 }}></Text>
            </View>

          </View>  

        </View>
        </ScrollView>  
    )
}

export default Profile

const styles = StyleSheet.create({
    
    RectangleShapeView: {
      marginTop: "10%",
      width: "88%",
      height: 780,
      backgroundColor: '#2D5C2E',
      borderWidth: 3,
      borderRadius: 5,
      borderColor: '#ffbd59',
      marginBottom: "12%"
      },

    circle: {
        marginTop: 30, 
        width: 80,
        marginStart: 140,
        height: 80,
        borderRadius: 50,
        backgroundColor: "#D9B648",
        justifyContent: 'center',
        alignItems: 'center',
        },

    imageDimen: {
        width: 50,
        height: 50
    },

      textContainer: {
        backgroundColor: '#008037',
        height: 50,
        marginTop: 5,
        marginStart: 10,
        borderRadius: 5,
        paddingTop: 10,
        marginEnd: 10  
      },

      textContainer1: {
        backgroundColor: '#2D5C2E',
        height: 50,
        marginTop: 5,
        marginStart: 10,
        borderRadius: 5,
        paddingTop: 10,
        marginEnd: 10  
      },
})
