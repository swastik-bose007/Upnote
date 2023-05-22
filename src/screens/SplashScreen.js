// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, TouchableWithoutFeedback, Keyboard, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import { globalStyles } from '../globalStyles/CommonStyles';
import { screenSize } from '../globalStyles/CommonStyles';
// --------------------------------------------------------------------
// SVG COMPONENTS
// --------------------------------------------------------------------
import UpNoteLogo from '../constants/Logo';
import Pattern from '../constants/BgPattern';

const SplashScreen = ({navigation}) => {
  console.log(('page loaded', navigation));
    useEffect(() => {
      splashNav();
    }, []);
  
    const splashNav = () => {
      const intervalNav = setInterval(() => {
        navigation.replace('GetStarted');
        clearInterval(intervalNav);
      }, 3000);
    };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className="bg-beige" style={[ screenSize.height, screenSize.width, globalStyles.flexCenter, globalStyles.dummyView]}>
        <Pattern className="absolute" style={[ screenSize.height, screenSize.width, globalStyles.dummyView ]} />
        <View style={[ globalStyles.flexCenter ]}>
          <UpNoteLogo />
          <Text className="mt-2 text-richBlack" style={[ globalStyles.splashText ]}>Upnote</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default SplashScreen