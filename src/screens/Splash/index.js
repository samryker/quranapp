import React, { Component, useEffect } from 'react';  
 import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert, BackHandler, ScrollView } from 'react-native';  
 import navigation from 'react-navigation';
 import { useHistory } from "react-router-dom";
 import logo from "../../assets/app_logo.png";

 import global from '../global';

 
 export default class Myapp extends Component
{  
   constructor(){  
     super();  
     //this.history = useHistory();
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  

    
    //window.location ='/Intro';
  }  


  LoginPressed = () => {

    

    if(global.email==""){

    this.props.navigation.navigate('LoginScreen');

    }else{

      this.props.navigation.navigate('LangOption');

    }

  }

   
  

   componentDidMount() {

    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 5000);

    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
        return true;
    });
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    
   
    render()  
    {  
        let Splash_Screen = (  
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#2D5C2E", width:"100%", height:"100%" }}>

            <View style={{width:"100%", height:"14%"}}>
              
            </View>
   
            <View style={styles.RectangleShapeView}>

            <View style= {styles.textContainer}>
              <Text style={{ color: "#ffbd59", fontSize: 36, fontWeight: "bold", marginTop: "16%" }}>THE HOLY QURAN</Text>
            </View>

            <View style = {styles.container}>

              <Image
              style={[styles.logoDimen]}
              resizeMode='stretch'
              source={logo} />
 
            </View>

            <View style= {styles.textContainer2}>
              <Text style={{ color: "#ffffff", fontSize: 18, marginTop: "-20%", textAlign: 'center' }}>English Translation and Commentary{'\n'}by </Text>
            </View>

            <View style={styles.rectangle}>
              <Text style={{ color: "#2D5C2E", fontSize: 26, textAlign: 'center' }}>Maulana Muhammad Ali</Text>
            </View>

          </View>

        </View> )  
         return(  
             <View style = { styles.MainContainer }>  
                <Text style={{textAlign: 'center'}}> Splash Screen Example</Text>  
                 {  
                  (this.state.isVisible === true) ? Splash_Screen : 
                  
          (
          
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#2D5C2E", width:"100%", height:"100%" }}>
           
          
          <View style={styles.RectangleShapeViews}>

          

            <View style= {styles.textContainers}>
              <Text style={{ color: "#ffbd59", fontSize: 36, fontWeight: "bold", marginTop: 20 }}>THE HOLY QURAN</Text>
            </View>

            <View style= {styles.textContainer2}>
              <Text style={{ color: "#ffffff", fontSize: 18, marginTop: 15, textAlign: 'center' }}>English Translation and Commentary{'\n'}by </Text>
            </View>

            <View style={styles.rectangles}>
              <Text style={{ color: "#2D5C2E", fontSize: 26, textAlign: 'center' }}>Maulana Muhammad Ali</Text>
            </View>

            <Text style={{ color: "white", fontSize: 18, marginTop: 30, textAlign: 'center' }}>{'Renowned author of\nseveral classic work on Islam'}</Text>
            <Text style={{ color: "white", fontSize: 28, marginTop: 15, textAlign: 'center' }}>WITH EXPENDED INDEX</Text>
            <Text style={{ color: "white", fontSize: 12, marginTop: 15, textAlign: 'center' }}>C 2011, Ahmadiyya Aajuman Isha'at Lahore Inc, USA.</Text>
            <Text style={{ color: "white", fontSize: 12, marginTop: 20, textAlign: 'center' }}>P.O. Box 3370 Dublin, Ohio +3016, U.S.A. </Text>
            <Text style={{ color: "white", fontSize: 12, marginTop: 5, textAlign: 'center' }}>Ph. 614-873-1030, fax: 614-874-1022: email:aiil@aol.com</Text>
            <Text style={{ color: "white", fontSize: 18, marginTop: 25, textAlign: 'center' }}>Internet: www.muslim.org</Text>

            <Text style={{ color: "white", fontSize: 12, marginTop: 25, textAlign: 'center' }}>
              Published in eBook format by Ahmadiyya Aajuman Isha'at Islam{'\n'}Lahore USA Converted byeBookit.com</Text>

            <Text style={{ color: "white", fontSize: 16, marginTop: 25, textAlign: 'center' }}>ISBN-13: 978-1-9342--704-8</Text>
            
          </View>

          <View style= {styles.textContainers}>
            <TouchableOpacity onPress={this.LoginPressed}>  
                <Text style={{ color: "#ffbd59", fontSize: 26, fontWeight: "bold", marginTop: 2, textAlign:'center', marginLeft:0, marginBottom:80, borderWidth:3, borderRadius: 5, borderColor: '#ffbd59', width:390, height:55, paddingTop:10}}>LOGIN</Text>
            </TouchableOpacity>
          </View>
          
          
        </View>)  
                }  
            </View>  
              );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
    },  

    buttonContainer: {
      width: '50%',
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
      marginLeft:'25%',
      backgroundColor : '#ffffff'
    },
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#00BCD4',  
        flex:1,  
    },
    
    RectangleShapeView: {
      width: '95%',
      height: '92%',
      backgroundColor: '#2D5C2E',
      borderWidth: 3, 
      borderColor: '#ffbd59',
      marginBottom:"30%",
      marginTop:"8%"
      },

      RectangleShapeViews: {
        width: '95%',
        height: "88%",
        backgroundColor: '#2D5C2E',
        borderWidth: 3,
        borderColor: '#ffbd59',
        marginTop:"18%"
      },
    
      textContainer: {
      marginTop: '-14%',
      justifyContent: 'center',
      alignItems: 'center',
      },

      textContainers: {
        marginTop: '0%',
        justifyContent: 'center',
        alignItems: 'center',
      },

      textContainerslogin: {
        marginTop: '0%',
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      textContainer2: {
      justifyContent: 'center',
      alignItems: 'center',
      },
    
      rectangle: {
      width: "85%",
      height: 45,
      paddingTop: 4,
      marginTop: 25,
      marginStart: 17,
      marginLeft: "8%",
      shadowColor: 'black',
      shadowOpacity: 0.5,
      shadowOffset: { width: 0, height: 2},
      shadowRadius: 10,
      elevation: 15,
      backgroundColor: '#ffbd59',
      },

      rectangles: {
        width:  "85%",
        height: 45,
        paddingTop: 4,
        marginStart: 17,
        backgroundColor: "#ffbd59",
        marginTop: 15,
        marginLeft: "8%",
      },

      logoDimen: {
        marginTop: "10%",
        marginLeft: '18%',
        width: "60%",
        height: "60%"
    },
});  