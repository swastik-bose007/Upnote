// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplScreen from 'expo-splash-screen';
import {firebase} from "./config";

// --------------------------------------------------------------------
// NAVIGATION DEPENDENCIES
// --------------------------------------------------------------------
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// --------------------------------------------------------------------
// SCREENS
// --------------------------------------------------------------------
import SplashScreen from "./src/screens/SplashScreen";
import GetStarted from "./src/screens/GetStarted";
import SignUp from "./src/screens/SignUp";
import Home from "./src/screens/Home";
import Notes from "./src/screens/Notes";
import AddNote from "./src/screens/NoteCRUD/AddNote";

function App(){
  
  // ------------------------------------------------------------
  // status bar color state
  // ------------------------------------------------------------
  const StyleTypes = ['default', 'dark-content', 'light-content'];
  const [visibleStatusBar, sentvisibleStatusBar] = useState(false);
  const [styleStatusBar, setStyleStatusBar] = useState(StyleTypes[0]);
  // ------------------------------------------------------------
  // navigation
  // ------------------------------------------------------------
  const Stack = createNativeStackNavigator();
  // ------------------------------------------------------------
  // user state
  // ------------------------------------------------------------
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // ------------------------- handle user state change -----------------------------------
  function onAuthStateChanged(user){
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(()=>{
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user){
    return (
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notes"
        component={Notes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddNote"
        component={AddNote}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default () => {
  // --------------------------------------------------------------------
  // fonts settings
  // --------------------------------------------------------------------
  let [fontsLoaded] = useFonts({
    // ------------------------ Header Font ----------------------------------
    "Gilroy-Thin" : require('./assets/fonts/Gilroy-Thin.ttf'),
    "Gilroy-SemiBold" : require('./assets/fonts/Gilroy-SemiBold.ttf'),
    "Gilroy-ExtraBold" : require('./assets/fonts/Gilroy-ExtraBold.otf'),
    "Gilroy-Black" : require('./assets/fonts/Gilroy-Black.ttf'),
    // ------------------------ Paragraph Font ----------------------------------
    "Poppins-Light" : require('./assets/fonts/Poppins-Light.ttf'),
    "Poppins-Regular" : require('./assets/fonts/Poppins-Regular.ttf'),
    "Poppins-Medium" : require('./assets/fonts/Poppins-Medium.ttf'),

  });
  useEffect(() => {
    async function prepare() {
      await SplScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  }
  else {
    SplScreen.hideAsync();
  }
  // --------------------------------------------------------------------
  // APP COMPONENTS
  // --------------------------------------------------------------------
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}