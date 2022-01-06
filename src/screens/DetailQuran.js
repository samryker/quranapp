import React, { useState, useEffect } from 'react'; 
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView, BackHandler, Alert, Image, AsyncStorage } from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton'

////import { SecureStore } from 'expo';

import { Constants, SecureStore } from 'expo';

import support from "../assets/bookmark.png";

import global from './global';

import globalbook from './globalbook';

//import globalck from './cookiegl';

import './cookiegl.js';

//import Cookies from 'js-cookie';

//import ReactSession from 'react-client-session';


import Cookie from 'universal-cookie';

//import SyncStorage from 'sync-storage';


//import { Storage } from 'expo-storage';


import { SearchBar } from 'react-native-elements';

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image source={{uri:item.photo}}  style={{width:60, height:60,borderRadius:30}} />
      <View style={{flex:1, justifyContent:'center'}}>
        <Text style={{fontWeight:"bold", color:'green'}}>{item.name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;READ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VERSES</Text>
        <Text>{item.position}</Text>
      </View>
      
    </View>
  );
}



//const navigation = useNavigation();

export default class DetailQuran extends React.Component {

  constructor(props) {
    super(props);
    

   //this.params = this.props.navigation.state.params.verses;
 
    this.state = {
      text: '',
      values: '',
      data:'',
      datas:'',
      data1:'',
      data2:''
    };

    this.arrayholder = [];

    this.valuesall='';

    this.values='';

  }
/*w
  static goToNextScreen = () => {
    return useNavigation().navigate('LoginScreen');
  }
  */
  handleBackButtonClick = () => { 
    navigation.goBack();
    return true;
  }



  componentDidMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => this.props.navigation.navigate('LangOption') }
      ]);
        return true;
    });


    //sessionStorage.setItem('cookies', true);

    //alert(sessionStorage.setItem('cookies'));

    //alert("gvar",global.valuesall);

    //alert(this.props.route.params.verses);

    //alert(this.props.navigation.state.params);
    
    }

    searchFilterFunction = text => {
      this.setState({
        value: text,
    });

      const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.state.data = newData;

    if(text=='')
    this.state.data = this.arrayholder

   /* this.setState({
      data: newData,
    }); */
  };


  componentWillUnmount() {
        this.backHandler.remove();
  }

  onBookMarkPressed = () => {
    
  
      this.valuesall = "";
  
      //alert(this.props.route.params.name);

      //alert(this.props.route.params.verses);

      const name = "{ \"name\" : " + "\" " + this.props.route.params.name + " \"";

      const verses = "\"verses\" : " + "\"" + this.props.route.params.verses + " \"" + " }";

      const valuesns = name + "," + verses;

      global.values = valuesns;
      
      if(global.valuesall=='' || global.valuesall=='undefined'){
      }else{
      global.valuesall = global.valuesall + "," + global.values;
      }
  
      this.valuesall = this.valuesall + "," + this.values;


      this.state.data1 =  global.valuesall;

      this.state.data1 = this.state.data1.replace("undefined,", "");

      global.bookname = this.props.route.params.name;
      global.bookverses = this.props.route.params.verses;

      globalbook.name = this.props.route.params.name
      globalbook.bookverses = this.props.route.params.verses;


      //alert(globalbook.name);

      //SyncStorage.set('name', this.props.route.params.name);
      //SyncStorage.set('verses', this.props.route.params.verses);

      //alert(valuesn);

      //alert(this.state.data1);

      let contacts = new Map();

      contacts.set(name, verses);

      this.state.data2 = contacts;

      /*
      await SecureStore.setItemAsync('secure_token', 'sahdkfjaskdflas$%^&');
      const token = await SecureStore.getItemAsync('secure_token');
      console.log(token); // output: sahdkfjaskdflas$%^&

      alert(token);
      */


      /*

      SecureStore.setItemAsync('name', this.props.route.params.name);

      const names = SecureStore.getItemAsync('name');

      alert(names);

      */

      


  /*    SInfo.setItem('name', this.props.route.params.name, {});

      SInfo.getItem('name',{}).then(value => {
        console.log(value); //value2
        alert(value);
    }); */

    /*
    const savingFirstData = SInfo.setItem("name", "value1", {
      sharedPreferencesName: "mySharedPrefs",
      keychainService: "myKeychain",
    });
    
    console.log(savingFirstData); //value1
    
    // Need to retrieve later?
    
    const gettingFirstData = SInfo.getItem("name", {
      sharedPreferencesName: "mySharedPrefs",
      keychainService: "myKeychain",
    });
    
    console.log(gettingFirstData); //value1

    alert(gettingFirstData);
    */

      ////alert(SInfo.getItem('name'));

      /*

      SInfo.setItem('name', this.props.route.params.name, {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain'
        }).then((value) =>
                console.log(value) //value 1
      );

      SInfo.setItem('verses', this.props.route.params.verses, {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain'
        }).then((value) =>
                console.log(value) //value 1
      ); 


      SInfo.getItem('name', {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain'}).then(value => {

            alert(value);

            console.log(value) //value1
      });

      */

      //Storage.setItem({"name": this.props.route.params.name});


      //alert(Storage.getItem("name"));

      /*

      var obj = new Object();
      obj.name = this.props.route.params.name;
      obj.verses = this.props.route.params.verses;

      //convert object to json string
      var string = JSON.stringify(obj);

      var array = new JSONArray();

      //convert string to Json Object
      console.log(JSON.parse(string)); 

      alert(string);

      */
      /*
      const student = [];
      const objs = {
          'name': name,
          'verses': verses
      }
      const obj = new Array();
      obj.name = this.props.route.params.name;
      obj.verses = this.props.route.params.verses;
      student.push(obj);


      alert("hi");

      alert(student);

      alert("h2");

      this.state.data1 = student;
      */

      //global.valuesall = "";
  
      //this.props.navigation.navigate('BookList',test : 'hello'});

      //alert(this.state.data1);

      //const globalCookie = new Cookie();
 
      //globalCookie.set('myCat', 'Pacman', { path: '/' });
      //console.log(globalCookie.get('myCat'));

      //alert(globalCookie.get('myCat'));


      

      
      
      this.props.navigation.navigate('BookList', { 
        tests1: this.state.data1,
        name: this.props.route.params.name,
        verses: this.props.route.params.verses
      })

      

       
    }

  

  state = {
    //test: this.props.navigation.state.params.test, 
    data:[
      {
        id: 0,
        name: 'Ben',
     },
     {
        id: 1,
        name: 'Susan',
     },
     {
        id: 2,
        name: 'Robert',
     },
     {
        id: 3,
        name: 'Mary',
     }

    ],

    datas:[],
    data1:[],
    data2:''
  }

  render(){

    

    this.state.data = this.props.route.params.values

    this.arrayholder = this.state.data

    //alert(global.valuesall);

    //alert(this.)

    //alert(test);

    const backActionHandler = () => {
      Alert.alert("Alert!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp()
        () }
      ]);
      return true;
    };

    
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#008037", width:"100%", height:"100%" }}>
  
      <View>
      

      <View style={styles.container}>
      <View style={styles.buttonContainers}> 
          <TouchableOpacity onPress={this.onBookMarkPressed}>
            <Image source={support} style = {styles.imageDimen} />
          </TouchableOpacity>
      </View>
      
      <View>


        
      <ScrollView>  
        
      
        <Text style={styles.paragraph}>
        
         The HOLY QURAN
         
        </Text>
        <Text style={styles.detail}> {this.props.route.params.verses}</Text>
        </ScrollView>        
      </View>     
      </View>
      </View>
    </View>
    );
  }
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
    marginTop:-20
  },
  text2: {
    backgroundColor:'#ffffff',
    width:'80%',
    fontSize:14,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
    marginBottom:-3,
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
    marginTop:20,
    height:34
  },
  tos: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'normal',
  },
  welcome: {
    paddingTop:200,
    textAlign: 'left',
    fontSize: 24,
    color: '#000000',
    color:'#ffbd59'
  },
  forgotPassword: {
    width: '50%',
    alignItems: 'flex-end',
    marginBottom: "15%",
  },
  row: {
    flexDirection: 'row',
    marginTop: 8,
    marginLeft:'30%',
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
    //color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    //color: theme.colors.primary,
  },
  container: {
     justifyContent: 'flex-start',
     paddingTop: 25,
     backgroundColor: '#005022',
     padding: 8,
     height:'94%',
     width:'93%',
     borderRadius:20,
     /*backgroundColor:'#005022',*/
     marginLeft:'3%',
     marginRight:'3%',
     marginTop:25,
     borderColor:'#ffbd59',
     borderWidth:4,
   },
   containers: {
    marginTop:50,
    height:"105%",
    width:"100%",
    backgroundColor: '#005022',
    marginBottom:100,
    borderColor:'#ffbd59',
    borderWidth:4
  },
   paragraph: {
     margin: 3,
     fontSize: 31,
     fontWeight: '700',
     textAlign: 'center',
     borderRadius:20,
     color:'#ffbd59',
     marginTop:20
   },
   detail: {
    marginLeft: '4%',
    marginRight: '2%',
    fontSize: 21,
    fontWeight: '200',
    textAlign: 'left',
    borderRadius:20,
    color:'#ffbd59',
    marginTop:15
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
})