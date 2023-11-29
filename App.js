import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ExternalRepsonderForm from './screens/ExtRes.js';
import ExtResNotification from './screens/ExternalNotification.js';
import LoginScreen from './screens/Login.js';
import Splash from './screens/Splash.js';
import WelcomePage from './screens/Welcome.js';

const Stack = createStackNavigator();

const App = () =>{

  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
          <Stack.Screen name = 'Splash' component={Splash}/>
          <Stack.Screen name = 'WelcomePage' component={WelcomePage}/>
          <Stack.Screen name = 'ExternalRespondentForm' component={ExternalRepsonderForm}/>
          <Stack.Screen name = 'ExtResNotification' component={ExtResNotification}/>
          <Stack.Screen name = 'LoginScreen' component={LoginScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;