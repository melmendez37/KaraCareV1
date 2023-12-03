import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DisplayFile from './screens/DisplayFile.js';
import ExternalRepsonderForm from './screens/ExtRes.js';
import MedStaffForm from './screens/ExtRes2.js';
import ExtResNotification from './screens/ExternalNotification.js';
import Home from './screens/Home.js';
import Inpatient from './screens/Inpatient.js';
import LoginScreen from './screens/Login.js';
import MedStaffNotif from './screens/MedStaffNotif.js';
import Notif from './screens/Notif.js';
import NotifHosp from './screens/NotifHosp.js';
import Outpatient from './screens/Outpatient.js';
import SendRes from './screens/SendRes.js';
import SentResNotif from './screens/SentResNotif.js';
import SignUpScreen from './screens/SignUp.js';
import Splash from './screens/Splash.js';
import UploadFileTab from './screens/UploadFile.js';
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
          <Stack.Screen name = 'Inpatient' component={Inpatient}/>
          <Stack.Screen name = 'Outpatient' component={Outpatient}/>
          <Stack.Screen name = 'NotifyHospital' component={NotifHosp}/>
          <Stack.Screen name = 'Home' component={Home}/>
          <Stack.Screen name = 'MedStaffForm' component={MedStaffForm}/>
          <Stack.Screen name = 'SignUpScreen' component={SignUpScreen}/>
          <Stack.Screen name = 'MedStaffNotif' component={MedStaffNotif}/>
          <Stack.Screen name = 'SendRes' component={SendRes}/>
          <Stack.Screen name = 'UploadFileTab' component={UploadFileTab}/>
          <Stack.Screen name = 'Notif' component={Notif}/>
          <Stack.Screen name = 'NotifHosp' component={NotifHosp}/>
          <Stack.Screen name = 'DisplayFile' component={DisplayFile}/>
          <Stack.Screen name = 'SentResNotif' component={SentResNotif}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;