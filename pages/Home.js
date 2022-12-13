import * as React from 'react';
import { View, Text, Button, StyleSheet, Pressable, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';




export default function Home({navigation}) {

    const [fontsLoaded] = useFonts({
        'Rony': require('../assets/fonts/Simvoni-gxm5Y.ttf'),
        'RonyBold': require('../assets/fonts/SimvoniBold-L3m7g.ttf'),
    });


    return (
        
        <View style={styles.container}>
            <View style={styles.box}>
            <Pressable style={({ pressed }) => [styles.card,  pressed ? {opacity: 0.6} : {},]} onPress={() => navigation.navigate('ConfigurePlay')}>
            <Ionicons name="beer-outline" size={80} color="#218380" style={styles.rotate}/>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.card, styles.small,  pressed ? {opacity: 0.6} : {},]} onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="person" size={65} color="#218380"/>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.card, styles.small,  pressed ? {opacity: 0.6} : {},]} onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="search" size={65} color="#218380"/>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.card,  pressed ? {opacity: 0.6} : {},]} onPress={() => navigation.navigate('OwnCollection')}>
            <Ionicons name="bookmarks-outline" size={65} color="#218380"/>
            </Pressable>
            
            </View>
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
         </View>
       
    );
  }
  
  const styles = StyleSheet.create({
    container: 
        {
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#218380',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        },
    box:
        {
        height: '45%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
         flexWrap: 'wrap',
        },

    card: 
        {
        backgroundColor: '#ffbc42',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width: '50%',
        height: '40%',
        margin: 4
        
        },
    small:
        {
        backgroundColor: 'white',
        width: '30%',
        },
    title: 
        {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Rony'
        },
    title2: 
        {
        width: '80%',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Rony',
        textAlign: 'center'
        },
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
    rotate: 
        {
        transform: [{ rotate: "25deg" }],
        },
  })
  