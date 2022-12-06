import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'
import { Dashboard } from "./pages/Dashboard";
import { Cadastro } from "./pages/Cadastro";
import { Register} from "./pages/Register";
import { Platform } from 'react-native'
import Theme from "./global/styles/Theme";
const Tab = createBottomTabNavigator();

export function Routes(){

  const theme = Theme
  
    return(

        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarInactiveTintColor: theme.colors.text,
            tabBarLabelPosition: 'beside-icon',
            headerShown: false,
            tabBarStyle: {
              paddingVertical: Platform.OS === 'ios' ? 20 : 0,
              height: 60
            },
            tabBarLabelStyle: {
              fontFamily: theme.fonts.regular
            }
          }}
        >
            <Tab.Screen 
            options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name={'format-list-bulleted'}
              size={size}
              color={color}
            />
          )
        }}
        name={'Listagem'}
        component={Dashboard}
      />

        <Tab.Screen 
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name={'attach-money'} size={size} color={color} />
          )
        }}
        name={'Cadastrar'}
        component={Cadastro}
      />
      <Tab.Screen 
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name={'pie-chart'} size={size} color={color} />
          )
        }}
        name={'Resumo'}
        component={Register}
      />

        </Tab.Navigator>


    )

}