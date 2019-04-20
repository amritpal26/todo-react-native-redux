import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default CustomTodo = (props) => {
    return(
        <View style={ [styles.container, 
            props.completed ? styles.complete : styles.incomplete ]}>
            <TouchableOpacity 
            style={ styles.touchArea }
            onPress = { () => props.onClick() }>
                <Text style={[styles.text, 
                props.completed ? 
                styles.completeText : styles.incompleteText]}
                >
                    { props.text }
                </Text>
            </TouchableOpacity>   
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
    },
    touchArea:{
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
    },
    complete:{
        backgroundColor: '#c3f7df',
    },
    incomplete: {
        backgroundColor: '#f7c3c3',
    },
    completeText:{
        textDecorationLine: 'line-through' 
    },
    incompleteText: {
    }
})