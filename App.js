import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';
//import Timer from './components/Timer/presenter';
import reducer22 from "./reducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//리듀서의 스테이트를 앱에 복사하기 위해 provider를 사용?


let store22 = createStore(reducer22);

console.log("store:");
console.log(store22.getState());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store22}>
        <Timer />
      </Provider>
    );
  }
}
