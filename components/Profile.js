import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Picture from './Picture'

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
        <Picture avatar={avatar_url} />
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Text style={styles.infoText}>{company}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>{location}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>{followers}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>{following}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>{email}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>{public_repos}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#dddfe6',
  },
  infoText: {
    fontSize: 20
  }
})


export default Profile
