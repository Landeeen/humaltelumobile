import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Profile({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
  }


  const styles = StyleSheet.create({
    container: {alignItems: 'center',
    marginTop: 500}
  })
  