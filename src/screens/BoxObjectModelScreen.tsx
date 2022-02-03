import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (<View style={style.container}>
      <Text style={style.title}>Box Object Model</Text>
  </View>);
};



const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
    title: {
      // padding: 10,
      paddingHorizontal: 100,
      paddingVertical: 20,
      fontSize:20,
      marginHorizontal: 20,
      // width: 150,
      borderWidth: 10

      // backgroundColor: 'red'
    }
})