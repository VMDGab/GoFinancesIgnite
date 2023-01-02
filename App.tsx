import React from "react";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { StatusBar } from 'react-native'
import { Routes } from "./src/routes/";
import AppLoading from "expo-app-loading"
import { NavigationContainer } from '@react-navigation/native';
import Theme from "./src/global/styles/Theme";
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from "./src/hooks/auth";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { Signin } from "./src/pages/Signin";


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={Theme}>
    <AuthProvider>
    <Routes/>
    </AuthProvider>

    </ThemeProvider>

  )
}
