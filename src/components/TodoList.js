import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import CustomTodo from './CustomTodo';

export default TododList = ({todos, toggleTodo}) => {
    return(
        <View style={ styles.container }>
            <FlatList
                style={ styles.flatlist }
                data= {todos}
                keyExtractor = {(item, index) => item.id.toString()}
                renderItem={({item}) => 
                    <CustomTodo
                        onClick = {() => toggleTodo(item.id)}
                        text = { item.text } 
                        completed= { item.completed } 
                    />
                }
                ItemSeparatorComponent={() => <View style={{ height:5 }}></View>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '90%',
        marginTop: 10,
        marginBottom: 60,
        alignItems: 'center'
    },
    flatlist:{
        width: '100%'
    }
})