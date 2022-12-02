import * as React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';




export default function Home({navigation}) {
    return (
        
        <View style={styles.container}>
            <Pressable style={({ pressed }) => [styles.card,  pressed ? {opacity: 0.6} : {},]} onPress={() => navigation.navigate('ConfigurePlay')}>
                <Text style={styles.title}>Pelaa</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.card, styles.small,  pressed ? {opacity: 0.6} : {},]} onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="settings" size={65} color="black"/>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.card, styles.small,  pressed ? {opacity: 0.6} : {},]} onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="globe-outline" size={65} color="black"/>
            </Pressable>
            <Pressable style={({ pressed }) => [styles.card,  pressed ? {opacity: 0.6} : {},]} onPress={() => navigation.navigate('OwnCollection')}>
                <Text style={styles.title}>Omat</Text>
            </Pressable>
         </View>
       
    );
  }
  
  const styles = StyleSheet.create({
    container: 
        {
        alignItems: 'center',
        marginTop: 225,
        background: 'blue',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        },

    card: 
        {
        backgroundColor: '#ffbc42',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        width:170,
        height: 180,
        margin: 4
        
        },
    small:
        {
        backgroundColor: '#218380',
        width: 130,
        },
    title: 
        {
        fontSize: 40,
        fontWeight: 'bold',
        },
 
  })
  