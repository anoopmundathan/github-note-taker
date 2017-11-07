import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Header = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </View>
  )
}

Header.PropTypes = {
  title: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    backgroundColor: '#9dc8c8',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  text: {
    fontSize: 25,
    marginBottom: 30
  }
})

export default Header
