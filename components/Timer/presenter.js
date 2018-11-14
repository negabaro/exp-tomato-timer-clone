import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from '../Button';

function formatTime(time) {
   var minutes = Math.floor(time / 60);
   time -= minutes * 60;

   var seconds = parseInt(time % 60, 10);

   return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10
     ? `0${seconds}`
     : seconds}`;

   return;
 }

class Timer extends Component {
    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        console.log("currentProps: ",currentProps);
        console.log("nextProps: ",nextProps);
        
        if (!currentProps.isPlaying && nextProps.isPlaying){
            //현재 isPlaying=false이고 새로운 이벤트로 인해 isPlaying=true일 경우 타이머 시작
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);
            
            this.setState({
                interval: timerInterval
            });
        } else if (currentProps.isPlaying && !nextProps.isPlaying) {
            //현재 isPlaying=true이고 새로운 이벤트가 isPlaying=false일 경우 타이머 중지
            clearInterval(this.state.interval);
        }
    }
    render(){
        const { isPlaying, elapsedTime, timerDuration, restartTimer22, startTimer22, stopTimer22  } = this.props;
        console.log('Timer this.props:');
        console.log(elapsedTime);
        console.log(this.props);
        console.log(isPlaying);
        return(
          <View style={styles.container}>
            <StatusBar barStyle={"light-content"} />
            <View style={styles.upper}>
              <Text style={styles.time}>
                { formatTime(timerDuration - elapsedTime) }
              </Text>
            </View>
            <View style={styles.lower}>
              {/* https://expo.github.io/vector-icons/  */}
              {/* null은 무효값이므로 &&로 대체 가능?? */}
              {/* isPlaying ? {} : null */}
              {/* isPlaying && {}  */}
              { !isPlaying &&<Button iconName="play-circle" onPress={ startTimer22 } /> }
              { isPlaying &&<Button iconName="stop-circle" onPress={ restartTimer22 } /> }
             
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