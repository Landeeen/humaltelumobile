import * as React from 'react';
import { View, StyleSheet, Image  } from 'react-native';

export default function Background({}) {

    return (
        <View style={styles.background}>
            <Image
            style={[styles.logo, styles.logo1]}
            source={require('../assets/Hlogo.png')}
            />
            <Image
            style={[styles.logo, styles.logo2]}
            source={require('../assets/Hlogo.png')}
            />
            <Image
            style={[styles.logo, styles.logo3]}
            source={require('../assets/Hlogo.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    background: 
    {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
    justifyContent: 'space-around',
    
    },
logo: 
    {
    width: 225,
    height: 225,
    opacity: 0.3

    },
logo1: 
    {
    marginLeft: '40%',
    marginTop: '5%'
    },
logo2: 
    {
    marginLeft: '-5%',
    
    },
logo3: 
    {
    marginLeft: '20%',
    marginTop: '5%'
    },

})