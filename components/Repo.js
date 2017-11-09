import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { fetchRepo } from '../utils/api'

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
    if(repos.length > 0) {
      return(
        <ScrollView style={{flex: 1}}>
          {repos.map(repo => (
            <Text 
              style={{flex: 1}}
              key={repo.name}>{repo.name}</Text>
          ))}
        </ScrollView>
      )
    } else {
      return(
        <View>
          <Text>No repos</Text>
        </View>
      )
    }
  }
}

export default Repo
