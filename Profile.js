import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function Profile({navigation}) {
    return (
        <View><Text>Profile</Text><Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      /></View>
    );
  }
  