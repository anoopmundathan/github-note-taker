import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'

class Badge extends Component {
  render() {
    return(
      <View>
        <Image
          style={styles.image}
          source={{uri: this.props.userInfo.avatar_url}} />
        <Text style={styles.name}> {this.props.userInfo.name} </Text>
        <Text style={styles.handle}> {this.props.userInfo.login} </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
      backgroundColor: '#48BBEC',
      paddingBottom: 10
  },
  name: {
      alignSelf: 'center',
      fontSize: 21,
      marginTop: 10,
      marginBottom: 5,
      color: 'white'
  },
  handle: {
      alignSelf: 'center',
      fontSize: 16,
      color: 'white'
  },
  image: {
      height: 125,
      width: 125,
      borderRadius: 65,
      marginTop: 10,
      alignSelf: 'center'
  }
});

Badge.propTypes = {
  userInfo: PropTypes.object.isRequired
}

export default Badge
