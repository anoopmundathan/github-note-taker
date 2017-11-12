import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Main extends Component {
  render() {
    return(
      <View style={styles.mainContainer}>
        <Text>Main</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  }
})

export default Main
