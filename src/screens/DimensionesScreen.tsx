import React from 'react';
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

// const { height, width} = Dimensions.get('window');
export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions()
  return (
      <View>
        <View style={styles.container}>
            <View style={{
                ...styles.cajaMorada,
                width: width * 0.60
            }}/>
            <View style={styles.cajaNaranja}/>
        </View>
        <Text style={ styles.titulo}>H: { height } W: { width }</Text>
      </View>
  )
};




const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        backgroundColor: 'red'
    },
    cajaMorada: {
        // width: '50%',
        height: '50%',
        backgroundColor: '#5856D6'
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B'
    },
    titulo:{
        fontSize: 20,
        textAlign: 'center'
    }
    
});