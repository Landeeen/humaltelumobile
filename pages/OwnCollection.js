import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function OwnCollection({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Create</Text>
            <Button
            title="Go to Home"
            onPress={() => navigation.navigate('PackCreator')}
            />
        </View>
    );
  }



  const styles = StyleSheet.create({
    container: 
        {
        alignItems: 'center',
        backgroundColor: '#218380',
        height: '100%',
        marginTop: 50
        }
  })
  