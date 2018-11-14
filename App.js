import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';
import reducer from "./reducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//리듀서의 스테이트를 앱에 복사하기 위해 provider를 사용?


let store = createStore(reducer);

console.log("store:");
console.log(store.getState());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
        {/* provider덕분에 타이머가 복사할 수 있는 스토어가 생김. (타이머가 store와 연결된다는 뜻) = provider는 자동으로 state를 복사하기 때문  */}
        <Timer />
      </Provider>
    );
  }
}
