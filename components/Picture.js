import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const Picture = (props) => {
  return(
    <View style={styles.picContainer}>
      <Image 
        style={styles.pic}
        source={{uri: props.avatar}} />
    </View>
  )
}

const styles = StyleSheet.create({
  picContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5cab7d'
  },
  pic: {
    width: 200,
    height: 200,
    borderRadius: 100
  }
})

Picture.PropTypes = {
  avatar: PropTypes.string.isRequired
}

export default Picture
