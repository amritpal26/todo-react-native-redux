import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';


import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/Visibletodos';
import TabsHeader from './components/TabsHeader'

export default class TodoApp extends Component{
  
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <TabsHeader />
        <VisibleTodos />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
});
