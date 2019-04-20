import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { connect } from 'react-redux'

import { setVisibilityFilter } from '../actions/index'

class CustomButton extends Component {

    setVisibility = (filter) => {
        this.props.dispatch(setVisibilityFilter(filter))
    }
    
    render(){
        return(
            <View style={ [styles.container, {backgroundColor: this.props.color}] }>
                <TouchableOpacity 
                style={ styles.touchable }
                onPress={()=> this.setVisibility(this.props.filter)}>
                    <Text>{ this.props.title }</Text>
                </TouchableOpacity>
            </View>
        );
    } 
}

export default connect()(CustomButton)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchable:{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
})