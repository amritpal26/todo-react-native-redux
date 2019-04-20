import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';

import Icon from 'react-native-vector-icons/Feather'

Icon.loadFont();

import store from './src/store/store'
import TodoApp from './src/TodoApp';


export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <TodoApp />
      </Provider> 
    );
  }
}
