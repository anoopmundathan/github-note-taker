import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GitHubNoteTaker from './components/GitHubNoteTaker'
import { MainStack } from './components/Navigator'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainStack />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
