import React, { Component} from 'react'
import { View, Image, StyleSheet } from 'react-native'

class DashBoard extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Image
          source={{uri: this.props.userInfo.avatar_url}}
          style={styles.image} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65
  },
  image: {
    height: 350
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
})

export default DashBoard
