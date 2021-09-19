import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function CalcHeader({dark, toggleTheme}) {
    return (
        <View 
        style={styles.container}>
           <View style={styles.titleContainer}>
           <Text style={[
               styles.titleText, 
            {color: dark? '#fff' : '#000'}
            ]}>Calculator</Text>
           </View>
            <TouchableOpacity 
            onPress={() => toggleTheme(!dark)}
            style={styles.iconContainer}>
               <FontAwesome5 
               name="moon" 
               size={32} 
               color={dark? '#fff' : '#000'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleContainer:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'flex-start',
        padding: 20

    },
    titleText:{
        fontSize: 42,
        fontWeight: 'bold'
    },
    iconContainer:{
        justifyContent: 'center',
        alignItems: 'center',
       flex: .2
    }
})