import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';

class Timer extends Component {
    render(){
        const { isPlaying, elapsedTime, timerDuration, restartTimer22, startTimer22, stopTimer22  } = this.props;
        console.log('Timer this.props:');
        console.log(this.props);
        console.log(isPlaying);
        return(
          <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <View style={styles.upper}>
              <Text style={styles.time}>
                25:00
              </Text>
            </View>
            <View style={styles.lower}>
              {/* https://expo.github.io/vector-icons/  */}
              {/* null은 무효값이므로 &&로 대체 가능?? */}
              {/* isPlaying ? {} : null */}
              {/* isPlaying && {}  */}
              { !isPlaying &&<Button iconName="play-circle" onPress={ startTimer22 } /> }
              { isPlaying &&<Button iconName="stop-circle" onPress={ stopTimer22 } /> }
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