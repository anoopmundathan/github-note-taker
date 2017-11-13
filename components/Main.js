import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableHighlight,
  ActivityIndicator,
 } from 'react-native'
import api from '../utils/api'
import Dashboard from './DashBoard'

class Main extends Component {
  state = {
    userName: '',
    isLoading: false,
    error: false
  }

  onChange = (evt) => {
    this.setState({ userName: evt.nativeEvent.text })
  }

  onSearch = () => {
    this.setState({ isLoading: true })
    api.getBio(this.state.userName)
      .then(res => {
        if(res.message === "Not Found") {
          this.setState({ 
            error: 'User not Found',
            isLoading: false
          })
        } else {
          this.props.navigator.push({
            component: Dashboard,
            title: res.name || 'Select an Option',
            passProps: { userInfo: res }
          })
          this.setState({
            error: false,
            isLoading: false, 
            userName: ''
          })
        }
      })
  }

  render() {
  const showError = (
    this.state.error ?
      <Text style={styles.errorText}>{this.state.error}</Text>: 
      <View></View>
  )
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Search for a Github User</Text>
        <TextInput 
          style={styles.searchInput}
          value={this.state.userName}
          onChange={this.onChange.bind(this)} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.onSearch.bind(this)}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
        <ActivityIndicator
          animating={this.state.isLoading}
          color='#111'
          size='large' />
        {showError}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 10,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#111',
    alignSelf: 'center'
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red'
  }
})

export default Main
