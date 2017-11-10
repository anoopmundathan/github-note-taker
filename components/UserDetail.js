import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  Image,
  TouchableOpacity
 } from 'react-native'

class UserDetail extends Component {
  
  onProfilePress = () => {
    this.props.navigation.navigate('Profile', this.props.navigation.state.params)
  }

  onRepoPress = () => {
    const { login } = this.props.navigation.state.params
    this.props.navigation.navigate('Repo', {user: login})
  }

  onNotePress = () => {
    this.props.navigation.navigate('Note')
  }

  render() {
    const { name, company, avatar_url } = this.props.navigation.state.params
    return(
      <View style={{flex: 1}}>
        <View style={styles.picContainer}>
          <Image 
            style={styles.pic}          
            source={{uri: avatar_url}} />
        </View>
        <View style={{flex: 1}}>
          <View style={[styles.info, styles.profile]}>
            <TouchableOpacity
              onPress={this.onProfilePress}>
              <Text style={styles.text}>View Profile</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.info, styles.repo]}>
          <TouchableOpacity
            onPress={this.onRepoPress}>
              <Text style={styles.text}>View Repo</Text>
          </TouchableOpacity>
          </View>
          <View style={[styles.info, styles.note]}>
            <TouchableOpacity
              onPress={this.onNotePress}>
                <Text style={styles.text}>Take Note</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  picContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5cab7d'
  },
  pic: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profile: {
    backgroundColor: '#fc913a'
  },
  repo: {
    backgroundColor: '#fcbe32'
  },
  note: {
    backgroundColor: '#eb9f9f'
  },
  text: {
    fontSize: 25,
    color: 'white'
  }
})

export default UserDetail
