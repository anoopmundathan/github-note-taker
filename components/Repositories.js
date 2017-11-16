import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import Badge from './Badge'
import Seperator from './Helpers/Seperator'

export default class Repositories extends Component {
  
  openPage(url) {
    console.log('open url', url)
  }

  render() {
    var repos = this.props.repos
    var list = repos.map((repo, index) => {
      var desc = repo.description ? <Text style={styles.description}> { repo.description } </Text> : <View />;
      return (
        <View key={repo.id}>
          <View style={styles.rowContainer}>
            <TouchableHighlight
              onPress={this.openPage.bind(this, repo.html_url)}
              underlayColor='transparent'>
              <Text style={styles.name}> {repo.name} </Text>
            </TouchableHighlight>
            <Text style={styles.stars}> Stars: {repo.stargazers_count} </Text>
            {desc}
          </View>
          <Seperator />
        </View>
      )
    })

    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo} />
        {list}
      </ScrollView>
    )
  }
}

Repositories.propTypes = {
  userInfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired
};

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#48BBEC',
    fontSize: 20,
    paddingBottom: 5
  },
  stars: {
    color: '#48BBEC',
    fontSize: 16,
    paddingBottom: 5
  },
  description: {
    fontSize: 15,
    paddingBottom: 5
  }
})

