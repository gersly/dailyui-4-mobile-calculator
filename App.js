import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import CalcHeader from './components/CalcHeader';
import CalculatorScreen from './screens/CalculatorScreen';

export default function App() {
  const [dark, toggleTheme] = useState(true)

  return (
    <SafeAreaView style={[styles.container,{backgroundColor: dark? '#000' : '#fff'}]}>
      <CalcHeader dark={dark} toggleTheme={toggleTheme}/>
     <CalculatorScreen dark={dark} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
