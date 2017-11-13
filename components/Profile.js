import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import Badge from './Badge'

class Profile extends Component {
  getTitle(item) {
    var item = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return item[0] ? item[0].toUpperCase() + item.slice(1) : item
  }

  render() {
    const userInfo = this.props.userInfo
    const topic = ['company', 'location', 'followers', 'following', 'email', 'public_repos']
    const list = topic.map((item, index) => {
      if(!userInfo[item]) {
        return <View key={index} />
      } else {
        return(
          <View key={index}>
            <View style={styles.rowContainer}>
              <Text style={styles.rowTitle}>{this.getTitle(item)}</Text>
              <Text style={styles.rowContent}>{userInfo[item]}</Text>
            </View>
          </View>
        )
      }
    })
    return(
      <ScrollView style={styles.container}>
        <Badge userInfo={this.props.userInfo}/>
        {list}
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 20
  },
  rowContent: {
    fontSize: 18
  }
})

export default Profile
