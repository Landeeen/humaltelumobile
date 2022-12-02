import * as React from 'react';
import { StyleSheet, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Play from './pages/Play';
import ConfigurePlay from './pages/ConfigurePlay';
import OwnCollection from './pages/OwnCollection';
import PackCreator from './pages/PackCreator';

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react-native';

import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui';


I18n.putVocabularies(translations);
I18n.setLanguage('fi');

I18n.putVocabularies({
  fi: {
    'Sign In': 'Kirjaudu sisään',
    'Sign in': 'Kirjaudu sisään',
    'Sign Up': 'Luo tili',
    'Create Account': 'Luo tili',
    'Email': 'Sähköposti',
    'Enter your Email': ' ',
    'Enter your email': 'Syötä sähköposti',
    'Enter your Password': ' ',
    'Please confirm your Password': ' ',
    'Password': 'Salasana',
    'Confirm Password': 'Vahvista salasana',
    'Forgot Password?': 'Uusi salasana?',
    'Reset Password': 'Uusi salasana',
    'Username cannot be empty': 'Lisää sähköposti',
    'Password cannot be empty': 'Lisää sähköposti',
    'Send code': 'Lähetä koodi',
    'Back to Sign In': 'Takaisin kirjautumiseen',
    
    


  },
});

Amplify.configure(awsconfig)

const Stack = createNativeStackNavigator();

Stack.Navigator.defaultProps = {
  headerMode: 'none',
};

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

 const App = () => {
  return (
    <ThemeProvider theme={{
      
      tokens: {
        colors: {
          font: {
          primary: '#ffbc42',
          secondary: 'white',
          tertiary: 'white'
          },
          background: {
            primary: '#218380'
          },
          border: {
            primary: 'white'
          },
          brand: {
            primary: {
              10: '#ffbc42',
              20: '#ffbc42',
              40: '#ffbc42',
              60: '#ffbc42',
              80: '#ffbc42',
              90: '#ffbc42',
              100: '#ffbc42',
            },
          },
        },
      },
      
    }}>
    <Authenticator.Provider>
    <Authenticator>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
          
        />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="Play" component={Play} options={{ headerShown: false }} />
        <Stack.Screen name="ConfigurePlay" component={ConfigurePlay} options={{ headerShown: false }} />
        <Stack.Screen name="OwnCollection" component={OwnCollection} options={{ headerShown: false }} />
        <Stack.Screen name="PackCreator" component={PackCreator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Authenticator>
    </Authenticator.Provider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {}
})

const CustomTheme = {
  
  button: {
    
    backgroundColor: 'red',
    borderRadius: 20,

  }
}



export default App