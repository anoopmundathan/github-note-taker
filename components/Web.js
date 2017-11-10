import React, { Component } from 'react'
import { WebView } from 'react-native'

class Web extends Component {
  render() {
    const { url } = this.props.navigation.state.params
    return (
      <WebView
        source={{uri: url}}
        style={{marginTop: 20}}
      />
    )
  }
}

export default Web
