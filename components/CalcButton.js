import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function CalcButton({type, bc, color, size}) {
    return (
        <TouchableOpacity
        onPress={() => {}}
        style={[styles.container,{
            backgroundColor: bc,
            width: size == 'lg' ? 174 : 74
        }]}
        >
        <Text
        style={[styles.text,{color: color}]}>{type}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        width: 74,
        height: 74, 
        borderRadius: 74
    },
    text:{
        fontSize: 42,
        fontWeight: 'bold'
    }
})