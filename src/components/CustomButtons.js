import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';


export default class CustomButton extends Component {
    render(){
        return(
            <View style={ [styles.container, {backgroundColor: this.props.color}] }>
                <Text>{ this.props.title }</Text>
            </View>
        );
    }
        
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        borderRadius: 5,
        padding: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
})