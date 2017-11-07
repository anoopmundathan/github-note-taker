import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import Header from './Header'

const Detail = () => {
  return(
    <View style={styles.detailContainer}>
      <Text>
        Detail
      </Text>
    </View>
  )
}

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
  },
  detailContainer: {
    flex: 8.5,
    backgroundColor: '#a593e0',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default GitHubNoteTaker

