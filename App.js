import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ExternalRepsonderForm from './screens/ExtRes.js';
import ExtResNotification from './screens/ExternalNotification.js';
import LoginScreen from './screens/Login.js';
import Splash from './screens/Splash.js';
import WelcomePage from './screens/Welcome.js';
import Inpatient from './screens/Inpatient.js';
import Outpatient from './screens/Outpatient.js';
import NotifHosp from './screens/NotifHosp.js';
import SendRes from './screens/SendRes.js';
import UploadFileTab from './screens/UploadFile.js';


/*
import MedStaffForm from './screens/ExtRes2.js';
import Home from './screens/Home.js';
*/
const Stack = createStackNavigator();

const App = () =>{

  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='UploadFileTab' screenOptions={{headerShown: false}}>
          <Stack.Screen name = 'Splash' component={Splash}/>
          <Stack.Screen name = 'WelcomePage' component={WelcomePage}/>
          <Stack.Screen name = 'ExternalRespondentForm' component={ExternalRepsonderForm}/>
          <Stack.Screen name = 'ExtResNotification' component={ExtResNotification}/>
          <Stack.Screen name = 'LoginScreen' component={LoginScreen}/>
          <Stack.Screen name = 'Inpatient' component={Inpatient}></Stack.Screen>
          <Stack.Screen name = 'Outpatient' component={Outpatient}></Stack.Screen>
          <Stack.Screen name = 'NotifyHospital' component={NotifHosp}></Stack.Screen>
          <Stack.Screen name = 'SendRes' component={SendRes}></Stack.Screen>
          <Stack.Screen name = 'UploadFileTab' component={UploadFileTab}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;