import React, { Component } from 'react'
import { fetchUser } from '../utils/api'

import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity } from 'react-native'

class Main extends Component {
  state = {
    user: ''
  }

  onSearchChange = (text) => {
    this.setState({ user: text })
  }

  onSearchPress = () => {
    const { user } = this.state
    
    if(user) {
      fetchUser(user)
        .then(data => {
          this.props.navigation.navigate('UserDetail', data)
        })
    }
  }

  render() {
    const { user } = this.state
    return(
      <View style={styles.container}>
        <TextInput
          placeholder='Search Github User'
          onChangeText={this.onSearchChange}
          value={user}
          style={styles.input} />
        <TouchableOpacity 
          onPress={this.onSearchPress}
          style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 20,
    fontSize: 20
  },
  button: {
    padding: 10,
    height: 50,
    width: 300,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: '#5A9367'
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  },
})

export default Main
