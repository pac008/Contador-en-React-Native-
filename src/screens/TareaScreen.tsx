import React from 'react';
import { StyleSheet, View } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}></View>
        <View style={styles.cajaNaranja}></View>
        <View style={styles.cajaAzul}></View>
    </View>
 );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425b',
        flexDirection: 'row',
        // alignSelf: 'baseline',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cajaMorada: {
        
        // alignSelf: 'flex-end',
        // flex: 3,
        // top: 287,
        
        // alignSelf: 'center',
        // marginBottom:100,
        width: 100,
        height: 100,
        // position:'absolute',
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856d6',
    },
    cajaNaranja: {
        // alignSelf: 'center',
        // position:'absolute',
        marginTop:100,
        // justifyContent: 'flex-start',
        // flex: 3,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#f0a23b',
    },
    cajaAzul: {
        // flex: 4,
        // position: 'absolute'
        // alignSelf: 'flex-start',
        width: 100,
        // justifyContent:'center',
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28c4d9',
    },
});