import * as React from 'react';
import { View, Text, Button, StyleSheet, Dimensions  } from 'react-native';

const { width } = Dimensions.get('window');

export default function PackItem({pack}) {



    return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Text>{pack.name}</Text>
            <Text>{pack.maker}</Text>
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
    margin: 'auto',
    width: '80%',
    height: 250,
    backgroundColor: '#ffbc42',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    },
    
  })