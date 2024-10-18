import React from 'react';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Login, SignUp, Welcome,PerfilUser,VetList, Works} from './Screens/Index'

const Stack= createStackNavigator();

export default function App(){
return (
   <>
  <NavigationContainer>
    <Stack.Navigator 
    initialRouteName='Welcome'>

      <Stack.Screen
        name='Welcome'
        component={Welcome}
        options={{
          headerShown:false
        }}
        />
 
      <Stack.Screen
        name='Login'
        component={Login}
        options={{
          headerShown:false
        }}
        />

        <Stack.Screen
        name='SignUp'
        component={SignUp}
        options={{
          headerShown:false
        }}
        />
          <Stack.Screen
        name='PerfilUser'
        component={PerfilUser}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen
        name='VetList'
        component={VetList}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen
        name='Works'
        component={Works}
        options={{
          headerShown:false
        }}
        />

    </Stack.Navigator>
  </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

