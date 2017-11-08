import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

class Profile extends Component {
  render() {
    const { 
      avatar_url, 
      company, 
      location, 
      followers, 
      following, 
      email, 
      public_repos } = this.props.navigation.state.params

    return(
      <View style={{flex: 1}}>
        <View style={styles.picContainer}>
          <Image 
            style={styles.pic}
            source={{uri: avatar_url}} />
        </View>
        <View style={{flex: 1}}>
          <Text>{company}</Text>
          <Text>{location}</Text>
          <Text>{followers}</Text>
          <Text>{following}</Text>
          <Text>{email}</Text>
          <Text>{public_repos}</Text>
        </View>
      </View>
    )
  }
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


export default Profile
