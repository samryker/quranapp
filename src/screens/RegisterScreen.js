import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity, BackHandler, Alert, ScrollView } from 'react-native'
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
import { nameValidator } from '../helpers/nameValidator'
import { SocialIcon } from 'react-native-elements'
import Icon from "react-native-vector-icons/MaterialIcons";
import { CheckBox } from 'react-native-elements'

import {TextInput, } from 'react-native-paper';
import Firebase from '../config/firebase';

import {
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

export default function RegisterScreen({ navigation }) {
  //const [name, setName] = useState({ value: '', error: '' })
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
  const [signupError, setSignupError] = useState('');

  const auth = Firebase.auth();

  const onSignUpPressed = () => {
   /* const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  */
  //var email="someone@example.com";
  //var password="password";
  
  //Create User with Email and Password
  /* firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
  */
  
    if (email !== '' && password !== '') {
      auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if ( errorCode == 'email-already-in-use' ) {
            alert('You already have an account with that email.');
        } else if ( errorCode == 'auth/invalid-email' ) {
            alert('Please provide a valid email');
        } else if ( errorCode == 'auth/weak-password' ) {
            alert('The password is too weak.');
        } else {
            alert(errorMessage);
        }
        console.log(error);
    });
    }
  

  navigation.reset({
    index: 0,
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
        { text: "YES", onPress: () => navigation.goBack }
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#2D5C2E", width:"100%", height:"100%" }}>
  
    <View style={styles.containers}>
    
    <View style={styles.container}>
    <View>
    <Text style={styles.welcome}>WELCOME TO </Text> 
      <Text style={styles.paragraph}>
      The Holy Quran
      </Text>
    </View>
    
    <View>
      <TextInput placeholder="Email"
      style={styles.text2}
      left={<TextInput.Icon name={'email'} size={20} color={'#B2BEB5'} />}
      value={email}
      onChangeText={text => setEmail(text)}
      keyboardType='email-address'
      textContentType='emailAddress'
      autoFocus={true}        
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
    <Button style={styles.login} mode="contained" onPress={onSignUpPressed}>
    <Text style={{fontSize:16,color: '#2D5C2E'}}>  Sign Up </Text>
    </Button>
    <View style={styles.row}>
      <Text style={{color: '#ffbd59'}}>Already have an account? </Text>
      <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
        <Text style={styles.link}>Login</Text>
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
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
    marginBottom:20,
    marginLeft:'10%',
    height:34,
    marginTop:20,
    fontFamily:'Quicksand_400Regular'
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
    marginBottom:20,
    marginLeft:'10%',
    height:34,
    fontFamily:'Quicksand_400Regular'
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
    height:34,
    color:'#005022',
    fontFamily:'Quicksand_400Regular'
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
    fontFamily:'Quicksand_700Bold'
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft:'18%',
    color: '#ffbd59',
    fontFamily:'Quicksand_400Regular'
  },
  forgot: {
    fontSize: 13,
    color: '#ffbd59',
  },
  email: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    //color: theme.colors.primary,
    color:'#ffbd59'
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
     marginTop:40,
     fontFamily:'Quicksand_400Regular'
   },
   containers: {
    height:"84%",
    width:"92%",
    backgroundColor: '#2D5C2E',
    marginBottom:100,
    borderColor:'#ffbd59',
    fontFamily:'Quicksand_400Regular',
    borderWidth: 3,
    borderColor: '#ffbd59',
    marginTop:'30%'
  },
  paragraph: {
    margin: 8,
    fontSize: 31,
    fontWeight: '700',
    textAlign: 'center',
    borderRadius:20,
    color:'#ffbd59',
    marginTop:-5,
    fontFamily:'Quicksand_700Bold'
  },
})
