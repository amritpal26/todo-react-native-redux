import React from 'react'
import { View, StyleSheet } from 'react-native'

import CustomButton from './../containers/CustomButton';
import { VisibilityFilters } from './../actions/index' ;

export default TabsHeader = () => {
        return(
            <View style={styles.container}>
                <CustomButton 
                    title="Active" 
                    filter={VisibilityFilters.SHOW_ACTIVE}
                    color="#ed9595"/>
                <CustomButton
                    title="All"
                    filter={VisibilityFilters.SHOW_ALL}
                    color="#9bbaef"/>
                <CustomButton
                    title="Done" 
                    filter={VisibilityFilters.SHOW_COMPLETED}
                    color="#95eda6"/>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        width: '80%',
        flexDirection: 'row',
    }
})