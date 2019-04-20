import React, {Component} from 'react';
import { StyleSheet, Text, FlatList, View} from 'react-native';
import CustomButton from './components/CustomButtons';

import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/Visibletodos';

export default class TodoApp extends Component{

  state = {
    todos: [],
    visibilityFilter: 'SHOW_ALL_TODOS'
  }
  
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />

        <View style={styles.tabs}>
          <CustomButton title="Todo" color="#ed9595"/>
          <CustomButton title="All" color="#9bbaef"/>
          <CustomButton title="Done" color="#95eda6"/>
        </View>

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
  tabs:{
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    padding: 5,
  },
});
