import React, { Component} from 'react'
import { 
  Text,
  View, 
  Image, 
  StyleSheet,
  TouchableHighlight
 } from 'react-native'

import api from '../utils/api'
import Profile from './Profile'
import Repositories from './Repositories'
import Notes from './Notes'

class DashBoard extends Component {
  makeBackground(btn) {
    var obj = {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
    };

    if (btn === 0) {
      obj.backgroundColor = '#48BBEC';
    } else if (btn === 1) {
      obj.backgroundColor = '#E77AAE';
    } else {
      obj.backgroundColor = '#758BF4';
    }

    return obj;
  }

  goToProfile() {
    this.props.navigator.push({
      title: 'Profile Page',
      component: Profile,
      passProps: { userInfo: this.props.userInfo }
    });
  }
  
  goToRepos() {
    api.getRepos(this.props.userInfo.login)
      .then(data => {
        this.props.navigator.push({
          title: 'Repositories',
          component: Repositories,
          passProps: { userInfo: this.props.userInfo, repos: data }
        })
      })
  }

  goToNotes() {
    api.getNotes(this.props.userInfo.login)
    .then(res => {
      res = res || {};
      this.props.navigator.push({
        title: 'Notes',
        component: Notes,
        passProps: { userInfo: this.props.userInfo, notes: res }
      })
    })
  }
  
  render() {
    return(
      <View style={styles.container}>
        <Image
          source={{uri: this.props.userInfo.avatar_url}}
          style={styles.image} />
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}>
          <Text style={styles.buttonText}>View Repos</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}>
          <Text style={styles.buttonText}>View Notes</Text>
        </TouchableHighlight>
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
