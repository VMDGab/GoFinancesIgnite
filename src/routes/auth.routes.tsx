import React from 'react';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 import { Signin } from '../pages/Signin';

 const Stack = createNativeStackNavigator();

 export function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='SignIn' component={Signin} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
 }