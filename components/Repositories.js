import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import Badge from './Badge'

class Repositories extends Component {
  render() {
    return(
      <ScrollView>
        <Badge userInfo={this.props.userInfo}/>
        <Text>Repositories</Text>
      </ScrollView>
    )
  }
}

Repositories.propTypes = {
  userInfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired
};

export default Repositories

