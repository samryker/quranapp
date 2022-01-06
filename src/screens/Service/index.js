import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, BackHandler, Alert, ScrollView } from 'react-native'
import profilePic from "../../assets/ic_add_pic.png"
import BackButton from '../../components/BackButton'
import axios from 'axios'
import Button from '../../components/Button'

import Firebase from '../../config/firebase';

import global from '../global';

const Profile = ({ navigation }) => {

  //var user = Firebase.auth().currentUser;

  var user = Firebase.auth().currentUser;


  console.log("email","email");

  //console.log("email",user.email);


if (user) {
  // User is signed in.
  if (user != null) {
    //name = user.displayName;
    //email = user.email;
    
    //photoUrl = user.photoURL;
    //emailVerified = user.emailVerified;
    //uid = user.uid;  
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
  }

  //console.log("email",email);
} else {
  // No user is signed in.
}

const onSignOut = () => {
  

  Firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log('User Logged Out!');
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });

  global.email = "";
  global.password = "";

  navigation.reset({
    index: 0,
    //routes: [{ name: 'Dashboard' }],
    routes: [{ name: 'LoginScreen' }],
  })
}

const onChangePass = () => {
  
  alert('Change Password Email sent', [{ text: 'Ok' }]);

  var auth = Firebase.auth();
  var emailAddress = "ranamaz50@gmail.com";
  auth.sendPasswordResetEmail(global.email).then(function() {
    // Email sent.
    console.log('Email Sent');
  }).catch(function(error) {
    // An error happened.
  });

  navigation.reset({
    index: 0,
    //routes: [{ name: 'Dashboard' }],
    routes: [{ name: 'LangOption' }],
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
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#2D5C2E", marginTop: "8%" }}>

          <View style={styles.RectangleShapeView}>


            <View style={{ flex: 1, justifyContent: "center" }}>               
               <Text style={{ color: '#ffffff', fontSize: 24, textAlign: 'center', fontWeight: 'bold', marginTop: 20 }}>SERVICES</Text>
            </View>


            

            <Button style={styles.textContainer} mode="contained" onPress={onSignOut}>
              <Text style={{fontSize:16,color: '#ffbd59', width:300, paddingLeft:"8%"}}>  Sign Out </Text>
            </Button>
            <Button style={styles.textContainer} mode="contained" onPress={onChangePass}>
                <Text style={{fontSize:16,color: '#ffbd59', paddingLeft:"8%"}}>  Change Password </Text>
            </Button>

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
        width: "95%",
        height: 780,
        backgroundColor: '#2D5C2E',
        borderWidth: 3,
        borderRadius: 5,
        borderColor: '#ffbd59',
        marginBottom: 40
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
        marginStart: 17,
        borderRadius: 5,
        paddingTop: 0,
        marginEnd: 10,
        marginLeft:0,
        width:'90%',
        marginLeft:'5%'
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
