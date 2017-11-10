import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { fetchRepo } from '../utils/api'
import Picture from './Picture'

class Repo extends Component {
  state = {
    repos: ''
  }
  componentDidMount() {
    const { user } = this.props.navigation.state.params
    fetchRepo(user)
      .then(data => {
        this.setState({
          repos: data
        })
      })
  }

  render() {
    const { repos } = this.state
    const { avatar } = this.props.navigation.state.params
    if(repos.length > 0) {
      return(
        <ScrollView style={{flex: 1}}>
          <Picture avatar={avatar}/>
          {repos.map(repo => (
            <View 
              key={repo.name}
              style={styles.container}>
              <TouchableOpacity>
                <Text style={styles.text}>{repo.name}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )
    } else {
      return(
        <View style={styles.container}>
          <Text style={styles.text}>No repos</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dddfe6'
  },
  text: {
    fontSize: 20,
    padding: 10
  }
})

export default Repo
