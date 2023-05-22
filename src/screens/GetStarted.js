// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native";
import React, { useState } from "react";
import {firebase} from "../../config";

// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import { globalStyles } from "../globalStyles/CommonStyles";
import { screenSize } from "../globalStyles/CommonStyles";
// --------------------------------------------------------------------
// SVG COMPONENTS
// --------------------------------------------------------------------
import Welcome from "../constants/welcomeSVG";

// --------------------------------------------------------------------
// Vector Icons 
// --------------------------------------------------------------------
import FeatherIcon from "@expo/vector-icons/Feather";

const GetStarted = ({ navigation }) => {
  // --------------------------------------------------------------------
  // Password visibility
  // --------------------------------------------------------------------
  const [text, setText] = useState();
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (email, password) => {
    try{
      await firebase.auth().signInWithEmailAndPassword(email, password)
    }
    catch (error){
      alert("User not found")
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={[screenSize.height, screenSize.width, globalStyles.dummyView]}
      >
        {/* -----------------------------------image title part------------------------------------------------ */}
        <View style={[globalStyles.flexCenter]}>
          <Welcome className="mt-24" />
          <Text className="mt-5 text-Licorice" style={[globalStyles.text1]}>
            WELCOME
          </Text>
          <Text
            className="text-center text-richBlack"
            style={[globalStyles.text2]}
          >
            Upnote is a note taking app developed by Swastik Bose
          </Text>
        </View>
        {/* ------------------------------------input part------------------------------------------------------ */}
          <View className="mt-8 mx-10" style={[globalStyles.flexCenter]}>
            <View className="w-full ">
              <TextInput
                style={[globalStyles.inputStyle]}
                className="bg-beige px-12"
                placeholder="enter your email id"
                onChangeText={(email)=> setEmail(email)}
              />
              <FeatherIcon name="mail" className="text-grey" size={15} style={[globalStyles.icon]} />
            </View>
            <View className="w-full mt-8">
              <TextInput
                style={[globalStyles.inputStyle]}
                className="bg-beige px-12"
                secureTextEntry={passwordVisible}
                placeholder="enter your password"
                onChangeText={(password)=> setPassword(password)}
              />
              <FeatherIcon name="lock" size={15} style={[globalStyles.icon]} />
              <FeatherIcon
                name={passwordVisible ? "eye-off" : "eye"}
                size={15}
                style={[globalStyles.icon2]}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            </View>
            {/* ------------------------------------Button part------------------------------------------------------ */}
            <TouchableOpacity
              className="w-full mt-28"
              activeOpacity={0.9}
              onPress={() => loginUser(email, password)}
            >
              <View className="bg-Licorice" style={[globalStyles.inputStyle, globalStyles.flexCenter]}>
                <Text className="text-white" style={[ globalStyles.text3 ]}>LOGIN</Text>
              </View>
            </TouchableOpacity>
            <View className="mt-8" style={[globalStyles.flexCenter]}>
              <Pressable onPress={() => navigation.navigate("SignUp")}>
                <Text style={[globalStyles.text4]}>Create Account</Text>
              </Pressable>
            </View>
          </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default GetStarted;
