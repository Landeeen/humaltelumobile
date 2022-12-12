import * as React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Pressable  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MapEntries } from 'aws-amplify-react-native/dist/AmplifyMessageMap';

const { width } = Dimensions.get('window');

export default function PackItem({pack, playerList, navigation}) {



    return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.title}>{pack.name}</Text>
            <View style={styles.cardInfo}>
                <Text style={styles.number}>Tekijä: {pack.creator}</Text>
                <Text style={styles.number}>Tehtäviä: {pack.tasks}/100</Text>
            </View>
            <Pressable style={({ pressed }) => [styles.startButton, pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.navigate('Play', {playerList: playerList})}>
                <Ionicons name="play-circle" size={35} color="black"/>
                <Text style={styles.startText}>Aloita Peli</Text>
            </Pressable>
       </View>
    </View>
    );
}

const styles = StyleSheet.create({
container:
    {
    width: width,
    alignItems: 'center',
    marginBottom: 5,
    },
card:
    {
    
    paddingBottom: 20,
    width: '75%',
    height: '90%',
    backgroundColor: '#ffbc42',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,

    },
title:
    {
    fontSize: 30,
    padding: 2,
    marginTop: 10,
    fontWeight: 'bold',
    width: '80%',
    
    },
number:
    {
    fontSize: 15,
    padding: 2,
    },
cardInfo:
    {
    width: '80%'
    },
startButton:
    {
    padding: 2,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffbc42',
    borderRadius: 10,
    borderWidth: 2
    
    },
startText:
    {
    fontSize: 25,
    // fontWeight: 'bold',
    marginLeft: 10,
    // textDecorationLine: 'underline',
    color: 'black'
    },
    
  })