import React, {Component} from 'react';
import {TextInput, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Feather'
import { addTodo } from './../actions/index'

Icon.loadFont();

class AddTodo extends Component{

  state = {
    text : '',
  }

  addTodo = (text) => {
    if(text != ''){
      this.props.dispatch(addTodo(text))
      this.setState({text: ''})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        
        <TextInput 
          style={styles.input} 
          placeholder='e.g. Create a new react native app.'
          value = {this.state.text}
          onChangeText = {(text) => this.setState({text: text})}
        />

        <TouchableOpacity 
          style={styles.add} 
          onPress={ () => this.addTodo(this.state.text) }>
            <View>
                <Icon name="plus" size={35}></Icon>
            </View>
        </TouchableOpacity>

      </View>
    );
  }
}

export default connect()(AddTodo)

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      margin: 8,
      width: '90%',
      height: 40,
      alignItems: 'center'
    },
    input:{
      padding: 4,
      height: '100%',
      borderColor: 'black',
      borderWidth: 1,
      flexGrow: 1,
      borderRadius: 5,
      backgroundColor: '#dde2ff',
    },
    add:{
      marginLeft: 8,
    },
});