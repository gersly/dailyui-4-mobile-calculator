import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CalcButton from '../components/CalcButton'

export default function CalculatorScreen({ dark }) {

    return (
        <View style={styles.container}>
            <View style={styles.calcScreenContainer}>

            </View>
            <View style={styles.calcButtonContainer}>
                <View style={styles.calcButtonRow}>
                    {['AC', '^', '%', '/'].map(btn =>
                        <CalcButton
                            key={btn}
                            type={btn}
                            color={dark ? '#000' : '#fff'}
                            bc={dark ? '#fff' : '#000'} />
                    )}
                </View>
                <View style={styles.calcButtonRow}>
                    {['7', '8', '9', 'x'].map(btn =>
                        <CalcButton
                            key={btn}
                            type={btn}
                            color={dark ? '#000' : '#fff'}
                            bc={dark ? '#fff' : '#000'} />
                    )}
                </View>
                <View style={styles.calcButtonRow}>
                    {['4', '5', '6', '-'].map(btn =>
                        <CalcButton
                            key={btn}
                            type={btn}
                            color={dark ? '#000' : '#fff'}
                            bc={dark ? '#fff' : '#000'} />
                    )}
                </View>
                <View style={styles.calcButtonRow}>
                    {['1', '2', '3', '+'].map(btn =>
                        <CalcButton
                            key={btn}
                            type={btn}
                            color={dark ? '#000' : '#fff'}
                            bc={dark ? '#fff' : '#000'} />
                    )}
                </View>
                <View style={styles.calcButtonRow}>
                    {['0', ',', '='].map(btn => {
                        if (btn == '0') {
                            return <CalcButton
                                key={btn}
                                type={btn}
                                size="lg"
                                color={dark ? '#000' : '#fff'}
                                bc={dark ? '#fff' : '#000'} />
                        } else {
                            return <CalcButton
                                key={btn}
                                type={btn}
                                color={dark ? '#000' : '#fff'}
                                bc={dark ? '#fff' : '#000'} />
                        }
                    })}
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    calcScreenContainer: {
        flex: 1
    },
    calcButtonContainer: {
        flex: 2,
        flexDirection: 'column',
        padding: 20
    },
    calcButtonRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})