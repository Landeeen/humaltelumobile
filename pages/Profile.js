import * as React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import {useAuthenticator } from '@aws-amplify/ui-react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Profile({navigation, }) {

  function SignOutButton() {
    const { signOut } = useAuthenticator();
    return (
      <Pressable style={({ pressed }) => [styles.logOut, pressed ? {opacity: 0.3} : {},]} onPress={() => signOut()}>
        <Text  style={styles.logOutText}>Kirjaudu ulos</Text>
        <Ionicons name="exit-outline" size={35} color='#218380'/>
      </Pressable>
      );
  }

    return (
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.backButton}>
                    <Pressable style={({ pressed }) => [pressed ? {opacity: 0.3} : {},]} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-circle" size={35} color="black"/>
                    </Pressable>
                </View>
            </View>
          <View style={styles.bottom}>
            <SignOutButton/>
          </View>
        </View>
    );
  }


  const styles = StyleSheet.create({
    container: 
        {
        // alignItems: 'center',
        backgroundColor: '#218380',
        height: '100%',
        // justifyContent: 'center'
        },
    top: 
        {
        alignItems: 'center',
        height: '100%',
        height: '20%',
        justifyContent: 'center'
        },
    bottom: 
        {
        alignItems: 'center',
        width: '100%',
        height: '80%%',
        justifyContent: 'center'
        },
    backButton:
        {
        width: '90%',
        },
    logOut:
        {
        backgroundColor: 'white',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'space-around'
        },
    logOutText:
        {
        fontFamily: 'Rony',
        fontSize: 20,
        color: '#218380'
        },
  })
  