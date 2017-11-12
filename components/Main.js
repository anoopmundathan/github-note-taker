import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native'

class Main extends Component {
  state = {
    userName: '',
    isLoading: false,
    error: false
  }

  onChange = (evt) => {
    this.setState({
      userName: evt.nativeEvent.value
    })
  }

  onSearch = () => {
    this.setState({
      isLoading: true
    })
  }

  render() {
    return(
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Search for a Github User</Text>
        <TextInput 
          value={this.state.userName}
          style={styles.searchInput}
          onChange={this.onChange.bind(this)} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.onSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableHighlight>
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
    padding: 4,
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
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  }
})

export default Main
