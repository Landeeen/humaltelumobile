import * as React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Pressable  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

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
            <Pressable style={({ pressed }) => [styles.startButton, pressed ? {backgroundColor: '#798f81'} : {},]} onPress={() => navigation.navigate('Play', {playerList: playerList})}>
                <Ionicons name="play" size={40} color="#218380"/>
                {/* <Text style={styles.startText}>Aloita Peli</Text> */}
            </Pressable>
            <View style={styles.likeCounter}>
                <Ionicons name="thumbs-up" size={45} color="green"/>
                <Text style={styles.likeCounterText}>67</Text>
            </View>
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
    width: '85%',
    height: '90%',
    backgroundColor: '#ffbc42',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,

    },
title:
    {
    fontFamily: 'RonyBold',
    fontSize: 40,
    padding: 20,
    marginTop: 10,
    fontWeight: 'bold',
    width: '90%',
    backgroundColor: '#e5a93b',
    borderRadius: 10,
    overflow: 'hidden',
    opacity: 0.8,
    color: 'black'
    
    },
number:
    {
    fontFamily: 'Rony',
    fontSize: 20,
    padding: 2,
    },
cardInfo:
    {
    width: '90%'
    },
startButton:
    {
    
    width: 125,
    height: 125,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
    borderWidth: 17,
    borderColor: '#218380',
    marginBottom: '-15%',
    overflow: 'hidden'
    },
likeCounter:
    {
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: "335deg" }],
    position: 'absolute',
    right: '10%',
    top: '50%',
    opacity: 0.6
    },
likeCounterText:
    {
    color: 'green',
    fontSize: 20,
    fontFamily: 'RonyBold',
    marginTop: 5
    },
// startText:
//     {
//     fontSize: 25,
//     // fontWeight: 'bold',
//     marginLeft: 10,
//     // textDecorationLine: 'underline',
//     color: '#218380'
//     },
    
  })