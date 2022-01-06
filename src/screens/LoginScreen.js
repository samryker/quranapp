import React, { useState, useEffect } from 'react'
import { TouchableOpacity, StyleSheet, View, BackHandler, Alert, KeyboardAvoidingView, ScrollView  } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
//import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { Ionicons } from "@expo/vector-icons";
//import { Icon } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements'
import Icon from "react-native-vector-icons/MaterialIcons";
import { CheckBox } from 'react-native-elements'

import {Avatar} from 'react-native-paper';
import {TextInput, } from 'react-native-paper';

import Firebase from '../config/firebase';

import global from './global';

import globalbook from './globalbook';

import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

//import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'; 

//import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//import { Google } from 'expo';

//import * as GoogleSignIn from "expo-google-sign-in";

//import * as GoogleAuthentication from 'expo-google-app-auth';

//import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'; 



export default function LoginScreen({ route, navigation }) {
  //const [email, setEmail] = useState({ value: '', error: '' })
  //const [password, setPassword] = useState({ value: '', error: '' })

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorCode, setErrorCode] = useState('');

  const [loginError, setLoginError] = useState('');

  
  //const [email, setEmail] = useState('');

  const [data, setData] = useState({ value: '', error: '' })

  //const text =  this.props.navigation.getParam('text', 'nothing sent')

  const auth = Firebase.auth();

  const googleProvider = Firebase.auth().GoogleAuthProvider;

  const StandaloneAndroidClientId = "603021363231-smv947keh0lb6ul7kgk5ac1e6vp6ihba.apps.googleusercontent.com";

  const text = route.params;

  let values = JSON.stringify(text);

  const auths = Firebase.auth();

  //let allvalues = JSON.parse(values);
  
  const onLoginPressed = () => {

    global.passKey = "0";

    global.email = email;
    global.password = password;

    if (email !== '' && password !== '') {

    Firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;

      global.passKey = "1";

      global.email = email;
      global.password = password;

      navigation.reset({
        index: 0,
        //routes: [{ name: 'Dashboard' }],
        routes: [{ name: 'LangOption' }],
      })
  

    })
    .catch((error) => {
      // catch error
      var errorCode = error.code;
      var errorMessage = error.message;

      Alert.alert("Hold on!", errorCode);

      //Alert.alert(errorCode);

      //setLoginError(errorCode);

      global.passKey = "1";

        // User not found? Create user.
        if ( errorCode === 'auth/user-not-found' ) {
          //firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if ( errorCode == 'email-already-in-use' ) {
                Alert.alert('You already have an account with that email.');
              } else if ( errorCode == 'auth/invalid-email' ) {
                Alert.alert('Please provide a valid email');
              } else if ( errorCode == 'auth/weak-password' ) {
                Alert.alert('The password is too weak.');
              } else {
                Alert.alert(errorMessage);
              }
              console.log(error);
            //});
            // Wrong Password Error
            } else if ( errorCode === 'auth/wrong-password' ) {
                
                Alert.alert('Wrong password. Please try again');
            } else {
                alert( errorMessage );
            }
            console.log( error );        

        });

      



    //alert(loginError);

    //alert(global.passKey);

    if(global.passKey  == '0'){

     
    }else{

      

      
    }

  }

}

const googlelogin = () => {


}

const onChangePass = () => {
  
        console.log("emails....",global.email)

        alert('Change Password Email sent', [{ text: 'Ok' }]);
        //var emailAddress = "ranamaz50@gmail.com";
        auth.sendPasswordResetEmail(global.email).then(function() {
          // Email sent.
          console.log('Email Sent');
        }).catch(function(error) {
          // An error happened.
        });

        navigation.reset({
          index: 0,
          //routes: [{ name: 'Dashboard' }],
          routes: [{ name: 'LoginScreen' }],
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
        { text: "YES", onPress: () => navigation.replace('Splash') }
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
    <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#2D5C2E", borderWidth: 3, width:"100%", height:"100%", marginTop:"5%" }}>
  
    
      <View style={styles.containers}>


      <View style={styles.container}>
      <View>
      <Text style={styles.welcome}>WELCOME TO </Text> 
        <Text style={styles.paragraph}>
          The Holy Quran
        </Text>
      </View>
      
      <View>
        <TextInput placeholder="Email or Phone"
        style={styles.text1}
        left={<TextInput.Icon name={'email'} size={20} color={'#B2BEB5'} />}
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        value={email}
        onChangeText={text => setEmail(text)}          
      />
      </View>
      <View>
      <TextInput placeholder="Password"
      style={styles.text2}
        left={<TextInput.Icon name={'lock'} size={20} color={'#B2BEB5'} />}
        textContentType='password'
        value={password}
        onChangeText={text => setPassword(text)}
      />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
       
        <Text style={{color: '#ffbd59',marginTop:20,marginLeft:-15}}></Text>
      </View>
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={onChangePass}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>

      </View>
      
      </View>
      <View>
      
      <Button style={styles.login} mode="contained" onPress={onLoginPressed}>
      <Text style={{fontSize:16, color: '#2D5C2E'}}> Login </Text>
      </Button>
      </View>   
      
      <View style={styles.row}>
        <Text style={{color: '#ffbd59'}}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      
      </View>
      </View>
    
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text1: {
    backgroundColor:'#ffffff',
    width:'80%',
    fontSize:14,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    textAlign: 'left',
    backgroundColor: '#ecf0f1',
    marginBottom:20,
    marginLeft:'10%',
    height:34,
    marginTop:20
  },
  text2: {
    backgroundColor:'#ffffff',
    width:'80%',
    fontSize:14,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    textAlign: 'left',
    backgroundColor: '#ecf0f1',
    marginBottom:-3,
    paddingRight:'10%',
    marginLeft:'10%',
    height:34
  },
  login: {
    backgroundColor:'#ffffff',
    width:'65%',
    fontSize:16,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    justifyContent: 'center',
    backgroundColor: '#ffbd59',
    padding:0,
    marginLeft:'17%',
    marginTop:-20,
    height:34
  },
  tos: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'normal',
  },
  welcome: {
    marginTop:-100,
    textAlign: 'center',
    fontSize: 24,
    color: '#000000',
    color:'#ffbd59',
    fontWeight:'bold'
  },
  forgotPassword: {
    width: '90%',
    marginLeft:"0%",
    alignItems: 'flex-end',
    marginBottom: "15%"
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft:'18%',
    color: '#ffbd59',
  },
  forgot: {
    fontSize: 13,
    color: '#ffbd59',
    marginTop:20,
    marginLeft:20
  },
  email: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    //color: theme.colors.primary,
    color: '#ffbd59'
  },
  container: {
     justifyContent: 'center',
     paddingTop: 120,
     shadowColor: 'black',
     shadowOpacity: 0.5,
     shadowOffset: { width: 0, height: 2},
     shadowRadius: 10,
     elevation: 15,
     backgroundColor: '#2D5C2E',
     padding: 8,
     height:'85%',
     width:'85%',
     borderRadius:20,
     marginLeft:'7%',
     marginTop:"12%"
   },
   containers: {
    height:"86%",
    width:"92%",
    backgroundColor: '#2D5C2E',    
    marginBottom:100,
    borderColor:'#ffbd59',
    fontWeight:'bold',
    borderWidth: 3,
    borderColor: '#ffbd59',
    marginTop:'20%'
  },
   paragraph: {
     margin: 8,
     fontSize: 31,
     fontWeight: '700',
     textAlign: 'center',
     borderRadius:20,
     color:'#ffbd59',
     marginTop:-5,
   },
})
