import React, { useState, useEffect } from 'react'; 
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, BackHandler, Alert } from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton'

import SInfo from 'react-native-sensitive-info';

import Cookie from 'universal-cookie';

import {withCookies} from 'react-cookie';

import globalbook from './globalbook';

//import SyncStorage from 'sync-storage';

//import places from './places.json';

import { SearchBar } from 'react-native-elements';
import ThemedListItem from 'react-native-elements/dist/list/ListItem';

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

export default class BookList extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      //tests1: this.props.route.params.tests1, 
      
      data:[],  
  
      datas:[]
    }
    
    this.state = {

      value: '',
      
      data:[],  
  
      datas:[]
    }


  /*  this.state = {
      data:[],  
      qurandata:[],
      datas:[],
      //refreshing: false,
    },
  */

    //prodotto = props.route.params.item;

    //alert(prodotto);
 
    /*
    this.state = {
      loading: false,
      error: null,
    };
    */

    //this.states = "[ { " + this.props.route.params.tests1 + "} ]";

    
    this.states1 = [ { "name" : "CH1", 
    "verses": "Ina the name of Allåh,b the Beneficent, the Merciful.c  \n" + "\n" + 

    "1.  Praise be to Allåh, the Lorda of " + 
         "the worlds,b\n" + "\n" +

    "2.  The Beneficent, the Merciful,\n" + "\n" + 

    "3.  Mastera of the day of Requital.b\n" + "\n" + 

    "4.  Thee do we serve and Thee do we" + 
         "beseeCH for help.a\n" + "\n" +

    "5.  Guide us ona the right path,\n" + "\n" + 

    "6.  The path of those upon whom" + 
         "Thou hast bestowed favours,a\n" + "\n" + 

    "7.  Not those upon whom wrath is" + 
         "brought down, nor those who go" + 
         "astray. \n" }];
    

    this.arrayholder = [];

    this.arrayList = [];

    this.arrayLists = [];
  }

 
 
   /*
  state = {
    tests1: this.props.route.params.tests1, 
     

    items: [
      { text: ["Learn JavaScript"] },
      { text: ["Learn react"] },
      { text: ["Learn node"]},
      { text: ["Learn vue"] }
    ],

    data:[],  

    datas:[],

    datass: {
      "names": {
        "12": {
          "Name": "ABC",
          "Status": "0",
          "Count": 11,
        },
        "31": {
          "Name": "CDE",
          "Status": "1",
          "Count": 12,
        }
      }
    }
    
  }

  */
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

    this.fetchCats();
  }

  handleRefresh = () => {
    this.setState(() => { this.fetchCats() }); // call fetchCats after setting the state
  }


  fetchCats() {

    //globalbook.name = this.props.route.params.name;

    //alert(globalbook.name);
    //alert(globalbook.bookverses);
    
    //const globalCookie = new Cookie();
    // console.log(Cookie.get('user'));

    //alert(Cookie.get('user'));

    //alert("654");

    //console.log(this.states);

    //console.log(this.states1);

    //alert("6581");

    //alert(this.state.data);

    //alert("6582");

    //alert(this.states1);
  
    //alert("658");

    //this.setState({ refreshing: true });


   // this.state.data = this.props.route.params.tests1

    //alert(this.props.route.params.tests1);

    //alert("gvar111",this.props.route.params.tests1);

    //this.arrayLists = "[ " + this.state.data + " ]";

    //this.state.datas = "[ " + this.state.data + " ]";

    //alert("hello1");

    //alert(this.state.datas);

    //alert("hello2");

    //let valdata = " [ { " + this.props.route.params.tests1 + " } ] ";

    //alert(valdata);

    //this.setState({ qurandata: this.state.datas });

    //this.setState({ data: this.state.datas });

    //this.setState({ data: valdata });

    //alert("hello2133");

    //alert("hello21");

    //alert(this.state.data);

    //alert(this.state.data);


    


    //alert("hello22");

    //alert("hello2211");

    //alert(this.state);


    //this.state.qurandata = this.state.datas.replace("undefined,", "");

    //alert("ggvar",this.state.qurandata);

    //let values = JSON.stringify(this.state.data);

    //alert(JSON.parse(values).name);
    //alert(JSON.parse(values).verses);

    //alert(this.arrayLists);

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
/*
  useEffect() {
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
  }
*/

  
  


  render(){

    const names = ['Bruce', 'Clark', 'Diana'];

    const places = [
      {
        "title":"title 1",
        "image":"something.jpeg",
        "description":"description 1."
      },
      {
        "title":"title 2",
        "image":"something.jpeg",
        "description":"description 2."
      }
    ];

    

    const versesdata = [
      {   
        "name" : "CH1", 
        "verses": "Ina the name of Allåh,b the Beneficent, the Merciful.c  \n" + "\n" + 

        "1.  Praise be to Allåh, the Lorda of " + 
             "the worlds,b\n" + "\n" +

        "2.  The Beneficent, the Merciful,\n" + "\n" + 

        "3.  Mastera of the day of Requital.b\n" + "\n" + 

        "4.  Thee do we serve and Thee do we" + 
             "beseeCH for help.a\n" + "\n" +

        "5.  Guide us ona the right path,\n" + "\n" + 

        "6.  The path of those upon whom" + 
             "Thou hast bestowed favours,a\n" + "\n" + 

        "7.  Not those upon whom wrath is" + 
             "brought down, nor those who go" + 
             "astray. \n"
          }
    ];

    //const valdatas = "[ { " + this.props.route.params.tests1 + " } ]";

    //alert("json11",valdatas);

    //let json = JSON.stringify(valdatas);

    //const dataname = this.state.datass.names;
    //const datanamearr = Object.keys(dataname).map(key => dataname[key]);

    //this.state.data = this.props.route.params.tests1

    //alert(this.props.route.params.tests1);

    //alert("gvar111",this.props.route.params.tests1);

    //this.arrayLists = "[ " + this.state.data + " ]";

    //this.state.datas = "[ " + this.state.data + " ];";

    //alert("hello1");

    //alert(this.state.data);

    //alert(versesdata);

    //const datass = this.state.datas

    //alert("hello999");
    

    //alert(datass);
    
    //alert("hello8888");

    const jsonObj = [];

    const item = {}
    item["name"] = "CH1";
    item["verses"] = "Ina the name of Allåh,b the Beneficent, the Merciful.c  \n" + "\n" + 

    "1.  Praise be to Allåh, the Lorda of " + 
         "the worlds,b\n" + "\n" +

    "2.  The Beneficent, the Merciful,\n" + "\n" + 

    "3.  Mastera of the day of Requital.b\n" + "\n" + 

    "4.  Thee do we serve and Thee do we" + 
         "beseeCH for help.a\n" + "\n" +

    "5.  Guide us ona the right path,\n" + "\n" + 

    "6.  The path of those upon whom" + 
         "Thou hast bestowed favours,a\n" + "\n" + 

    "7.  Not those upon whom wrath is" + 
         "brought down, nor those who go" + 
         "astray. \n";

    jsonObj.push(item);

    const jsons = JSON.stringify(jsonObj);

    //alert(jsonObj);

    //alert(jsons);

    //alert(SyncStorage.get("name"));

    const jsonObjs = [];

    const items = {}
    if(globalbook.name!='')
    items["name"] = globalbook.name; //SyncStorage.get("name");
    if(globalbook.bookverses!='')
    items["verses"] =  globalbook.bookverses;

    jsonObjs.push(items);

    //alert(this.props.navigation.state.params.test);

    //this.state.data = JSON.parse(this.state.data);

    ////console.log(this.state.data);

    //alert(global.valuesall);

    //this.state.data = this.props.route.params.test

    //this.state.data = "";

    //this.state.data = global.valuesall

    //this.arrayLists = "[ " + this.state.tests1 + " ]";

    //this.state.data= "[ " + this.props.route.params.tests1 + " ]"; 

    //alert(this.state.tests);

    //alert(this.arrayLists);

    //alert(test);

    //alert(this.state.data.name);
    //alert(this.state.data.verses);

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

    

  /* const searchFilterFunction = text => {    
      const newData = this.state.data.filter(item => {      
        const itemData = `${item.name.title.toUpperCase()}   
        ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
        
         const textData = text.toUpperCase();
          
         return itemData.indexOf(textData) > -1;    
      });
      
      this.setState({ data: newData });  
    }; */

    //this.state.datas = JSON.parse(JSON.stringify(this.state.data));

    //console.log(this.state.datas.replace("\\n","\n"));
    
    
    /*
    useEffect(() => {

      // Add event listener for hardware back button press on Android
      BackHandler.addEventListener("hardwareBackPress", backActionHandler);
  
      return () =>
        // clear/remove event listener
        BackHandler.removeEventListener("hardwareBackPress", backActionHandler);
    }, []);
    */

        //this.state.data = this.props.route.params.tests1

        //alert("gvar",this.state.data);

        //this.arrayLists = "[ " + this.state.data + " ]";

        //this.state.data = "[ " + this.state.data + " ]";

        //alert(this.state.data);

        //this.state.data = this.props.route.params.tests1

        //alert("gvar111",this.props.route.params.tests1);
    
        //this.arrayLists = "[ " + this.state.data + " ]";
    
        //this.state.datas = "[ " + this.state.data + " ]";
    
        //alert(this.state.datas);
    
        //this.state.qurandata = this.state.datas.replace("undefined,", "");

        
    
        //alert("ggvar111111","hello");


        //let qurandata = this.state.data.replace("undefined,", "");        

        //alert("gvarsss11",this.state.qurandata);

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#2D5C2E", borderWidth: 3, width:"100%", height:"100%", marginTop:"5%" }}>
  
      <View style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
      
      
        
      
        <FlatList
          style={{flex:1, backgroundColor:'#2D5C2E'}}
          data={jsonObjs}
          //onRefresh={this.handleRefresh}
          //renderItem={({ item }) => <Item item={item}/>}

          renderItem={({item}) => (            

            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('DetailQuran', { 
              verses: item.verses,
              name : item.name
            })} >

                <View style={styles.detail}>
                <Text> {item.name} </Text>
                </View>

           </TouchableWithoutFeedback>

          )}
          keyExtractor={item => item.name}
        />
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#2D5C2E',
    marginTop:"8%",
    textAlign:'center',
    width:'95%',
    borderWidth: 3,
    borderColor: '#ffbd59',
    marginLeft: "2%",
    marginTop:"8%",
  },
  listItem:{
    margin:10,
    backgroundColor:"#ffbd59",
    width:"90%",
    height:"15%",
    paddingLeft:"8%",
    paddingTop:"5%",
    textAlign:"center",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderColor: '#ffbd59',
    borderRadius:3
  },detail: {
    margin: 8,
    fontSize: 19,
    fontWeight: '400',
    textAlign: 'center',
    borderRadius:20,
    color:'#ffbd59',
    marginTop:15
  },
});
