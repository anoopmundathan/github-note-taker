import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Header from './Header'
import Detail from './Detail'

class GitHubNoteTaker extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Header title='GitHub Note Taker' />
        <Detail />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default GitHubNoteTaker

