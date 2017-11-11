import React, { Component } from 'react'
import { 
  View,
  KeyboardAvoidingView,
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity } from 'react-native'
import Picture from './Picture'

class Note extends Component {

  state = {
    note: '',
    notes: []
  }
  
  onNoteChange = (text) => {
    this.setState({ note: text })
  }

  onNotePress = () => {
    this.setState({
      notes: [...this.state.notes, this.state.note]
    })
  }

  render() {
    const { avatar } = this.props.navigation.state.params
    const { note } = this.state
    return(
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Picture avatar={avatar}/>
        <View style={{flex: 1}}>
          {this.state.notes.map((note, index) => (
            <Text key={index} style={styles.notes}>{note}</Text>
          ))}
        </View>
        <View style={styles.noteContainer}>
          <TextInput
            placeholder='Add note'
            onChangeText={this.onNoteChange}
            value={note}
            style={styles.input} />
          <TouchableOpacity
            style={styles.button}
            onPress={this.onNotePress}>
            <Text style={styles.buttonText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  notes: {
    fontSize: 25,
    padding: 10,
    marginLeft: 30,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#dddfe6',
  },
  noteContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  input: {
    width: 250,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#757575',
    fontSize: 20
  },
  button: {
    flex:1,
    padding: 10,
    height: 50,
    backgroundColor: '#58C9B9'
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  },
})

export default Note
