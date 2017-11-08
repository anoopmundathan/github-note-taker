import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Main from './Main'

class GitHubNoteTaker extends Component {
  render() {
    return(
      <View style={{flex: 1}}>
        <Main />
      </View>
    )
  }
}

export default GitHubNoteTaker

