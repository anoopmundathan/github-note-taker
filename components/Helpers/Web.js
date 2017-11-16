import React, { Component } from 'react'
import {
  View,
  WebView,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'


export default function Web(props) {
  return (
    <View style={styles.container}>
      <WebView source={{uri: props.url}} />
    </View>
  );
}

Web.propTypes = {
  url: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
    flexDirection: 'column'
  }
})
