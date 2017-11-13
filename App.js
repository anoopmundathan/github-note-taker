import React, { Component } from 'react'
import { StyleSheet, NavigatorIOS } from 'react-native'
import Main from './components/Main'

export default class App extends Component {
  render() {
    return (
        <NavigatorIOS
          style={styles.container} 
          initialRoute={{ title: 'Github Note Taker',component: Main}} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
})
