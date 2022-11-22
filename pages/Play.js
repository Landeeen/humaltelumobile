import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Play({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Play</Text>
            <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
  }

const styles = StyleSheet.create({
    container:
    {
    alignItems: 'center',
    marginTop: 100
    },
    
  })