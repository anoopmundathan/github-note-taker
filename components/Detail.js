import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity } from 'react-native'

const Detail = (props) => {
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Search GitHub User</Text>
      <TextInput 
        style={styles.input}
        value='hello' />
      <TouchableOpacity 
        onPress={props.onSearchClick}
        style={styles.button}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 8.5,
    alignItems: 'center'
  },
  text: {
    marginTop: 150,
    fontSize: 25
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 20,
    fontSize: 20
  },
  button: {
    padding: 10,
    height: 50,
    width: 300,
    marginLeft: 40,
    marginRight: 40,
    backgroundColor: '#5A9367'
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center'
  },
})

export default Detail
