import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

// const intro_bg = require('./intro_bg.png')

const IntroductionScreen = ( navigation ) => {
    return (

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#008037" }}>

          <View style={styles.RectangleShapeView}>

            <View style= {styles.textContainer}>
              <Text style={{ color: "#ffbd59", fontSize: 36, fontWeight: "bold", marginTop: 45 }}>THE HOLY QURAN</Text>
            </View>

            <View style= {styles.textContainer2}>
              <Text style={{ color: "#ffffff", fontSize: 18, marginTop: 60, textAlign: 'center' }}>English Translation and Commentary{'\n'}by </Text>
            </View>

            <View style={styles.rectangle}>
              <Text style={{ color: "#008037", fontSize: 26, textAlign: 'center' }}>Maulana Muhammad Ali</Text>
            </View>

            <Text style={{ color: "white", fontSize: 18, marginTop: 30, textAlign: 'center' }}>{'Renowned author of\nseveral classic work on Islam'}</Text>
            <Text style={{ color: "white", fontSize: 28, marginTop: 30, textAlign: 'center' }}>WITH EXPENDED INDEX</Text>
            <Text style={{ color: "white", fontSize: 12, marginTop: 30, textAlign: 'center' }}>C 2011, Ahmadiyya Aajuman Isha'at Lahore Inc, USA.</Text>
            <Text style={{ color: "white", fontSize: 12, marginTop: 20, textAlign: 'center' }}>P.O. Box 3370 Dublin, Ohio +3016, U.S.A. </Text>
            <Text style={{ color: "white", fontSize: 12, marginTop: 5, textAlign: 'center' }}>Ph. 614-873-1030, fax: 614-874-1022: email:aiil@aol.com</Text>
            <Text style={{ color: "white", fontSize: 16, marginTop: 30, textAlign: 'center' }}>Internet: www.muslim.org</Text>

            <Text style={{ color: "white", fontSize: 12, marginTop: 30, textAlign: 'center' }}>
              Published in eBook format by Ahmadiyya Aajuman Isha'at Islam{'\n'}Lahore USA Converted byeBookit.com</Text>

            <Text style={{ color: "white", fontSize: 16, marginTop: 30, textAlign: 'center' }}>ISBN-13: 978-1-9342--704-8</Text>
            
          </View>

          <View style={styles.row}>
            <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>

        </View>
       
    )
}

export default IntroductionScreen

const styles = StyleSheet.create({

  RectangleShapeView: {
    marginTop: 30,
    width: 360,
    height: 680,
    backgroundColor: '#008037',
    borderWidth: 3,
    borderColor: '#ffbd59'
    },
  
    textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    },
  
    textContainer2: {
    justifyContent: 'center',
    alignItems: 'center',
    },
  
    rectangle: {
    width: 320,
    height: 45,
    marginTop: 25,
    marginStart: 17,
    backgroundColor: "#ffbd59",
    },
})
