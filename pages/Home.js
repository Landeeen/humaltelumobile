import * as React from 'react';
import { View, Text, Button, StyleSheet, Pressable, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Background from '../components/Background';

export default function Home({navigation}) {

    return (
        
        <View style={styles.container}>
            <View style={styles.box}>
            <Pressable style={({ pressed }) => [styles.card,  pressed ? {opacity: 0.6} : {},]} onPress={() => navigation.navigate('ConfigurePlay')}>
            <Ionicons name="beer-outline" size={80} color="#218380" style={styles.rotate}/>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.card, styles.small,  pressed ? {opacity: 0.6} : {},]} onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="person" size={65} color="#218380"/>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.card, styles.small,  pressed ? {opacity: 0.6} : {},]} onPress={() => navigation.navigate('Browse')}>
                <Ionicons name="search" size={65} color="#218380"/>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.card,  pressed ? {opacity: 0.6} : {},]} onPress={() => navigation.navigate('OwnCollection')}>
            <Ionicons name="bookmarks-outline" size={65} color="#218380"/>
            </Pressable>
            
            </View>
            <Background/>
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
    rotate: 
        {
        transform: [{ rotate: "25deg" }],
        },
  })
  