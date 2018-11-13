import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';


class Timer extends Component {
    render(){
        return(
          <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <View style={styles.upper}>
              <Text style={styles.time}>
                25:00
              </Text>
            </View>
            <View style={styles.lower}>
              <Text>BUTTON HERE</Text>
            </View>
          </View>
        )
    }
    
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "red"
   },
   lower: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center"
   },
   upper: {
       flex: 2,
       justifyContent: "center",
       alignItems: "center"
   },
   time: {
       color: "white",
       fontSize: 120,
       fontWeight: "100"
   }
});


export default Timer;