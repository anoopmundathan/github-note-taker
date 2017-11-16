import React, { Component } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableHighlight, 
  TextInput,
  ListView } from 'react-native'
import Badge from './Badge'
import Seperator from './Helpers/Seperator'
import api from '../utils/api'

class Notes extends Component {
  
  ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
  state = {
    dataSource: this.ds.cloneWithRows(this.props.notes),
    note: '',
    error: ''
  }
  
  handleChange(evt) {
    this.setState({
      note: evt.nativeEvent.text
    })
  }

  handleSubmit() {
    const { note } = this.state
    this.setState({ note: '' })

    api.addNote(this.props.userInfo.login, note) 
      .then(res => {
        api.getNotes(this.props.userInfo.login)
          .then(data => {
            this.setState({
              dataSource: this.ds.cloneWithRows(data)
            })
          })
      }).catch(error => {
        console.log('Failed', error)
        this.setState({error})
      })
  }

  footer() {
    return(
      <View>
        <View style={styles.footerContainer}>
          <TextInput
            style={styles.searchInput}
            value={this.state.note}
            onChange={this.handleChange.bind(this)}
            placeholder="New Note" />
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit.bind(this)}
            underlayColor='#88D4F5'>
            <Text style={styles.buttonText}>  Submit </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  renderRow(rowData) {
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text> {rowData} </Text>
        </View>
        <Seperator />
      </View>
    )
  }

  render() {
    return(
      <View style={styles.container}>  
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderHeader={() => <Badge userInfo={this.props.userInfo}/>}
          enableEmptySections={true} />    
        {this.footer()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  buttonText: {
    fontSize: 18,
    color: 'white'
  },
  button: {
    height: 60,
    backgroundColor: '#48BBEC',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: '#111',
    flex: 10
  },
  rowContainer: {
    padding: 10
  },
  footerContainer: {
    backgroundColor: '#E3E3E3',
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default Notes
