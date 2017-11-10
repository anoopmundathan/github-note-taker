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

  onRepoPress = (url) => {
    this.props.navigation.navigate('Web', {url})
  }

  render() {
    const { repos } = this.state
    const { avatar } = this.props.navigation.state.params
    if(repos.length > 0) {
      return(
        <ScrollView style={{flex: 1}}>
          <Picture avatar={avatar}/>
          {repos.map(repo => {
            const { html_url, name } = repo
            return(
              <View 
                key={name}
                style={styles.container}>
                <TouchableOpacity
                  onPress={() => this.onRepoPress(html_url)}>
                  <Text style={styles.text}>{name}</Text>
                </TouchableOpacity>
              </View>
            )
          })}
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
