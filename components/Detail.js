import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Detail = () => {
  return(
    <View style={styles.container}>
      <Text>
        Detail
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 8.5,
    backgroundColor: '#a593e0',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Detail
