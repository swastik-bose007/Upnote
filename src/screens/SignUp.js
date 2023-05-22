// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native";
import React, { useState } from "react";
import { firebase } from "../../config";
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

const SignUp = ({ navigation }) => {
  // --------------------------------------------------------------------
  // Password visibility
  // --------------------------------------------------------------------
  const [text, setText] = useState();
  const [passwordVisible, setPasswordVisible] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // const registerUser = async (email, password, name) => {
  //   await firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(() => {
  //       firebase
  //         .auth()
  //         .currentUser.sendEmailVerification({
  //           handleCodeInApp: true,
  //           url: "https://upnote-15447.firebaseapp.com/",
  //         })
  //         .then(() => {
  //           alert("verification mail sent. After verifiying, sign out and log in again");
  //           // navigation.navigate("GetStarted");
  //         })
  //         .catch((error) => {
  //           alert(error.message);
  //         })
  //         .then(() => {
  //           firebase
  //             .firestore()
  //             .collection("users")
  //             .doc(firebase.auth().currentUser.uid)
  //             .set({
  //               name,
  //               email,
  //             });
  //         })
  //         .catch((error) => {
  //           alert(error.message);
  //         });
  //     })
  //     .catch((error) => {
  //       alert(error.message);
  //     });
  // }

  const registerUser = async (email, password, name) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
  
      const user = firebase.auth().currentUser;
      const userId = user.uid;
      console.log("User ID:", userId);

  
      await user.sendEmailVerification({
        handleCodeInApp: true,
        url: "https://upnote-15447.firebaseapp.com/",
      });
  
      alert("Verification email sent. After verifying, sign out and log in again");
  
      await firebase.firestore().collection("users").doc(userId).set({
        name,
        email,
      });
  
      // navigation.navigate("GetStarted");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={[screenSize.height, screenSize.width, globalStyles.dummyView]}
      >
        {/* -----------------------------------image title part------------------------------------------------ */}
        <View style={[globalStyles.flexCenter]}>
          {/* <Welcome className="mt-16" /> */}
          <Text className="mt-40 text-Licorice" style={[globalStyles.text1]}>
            NEW HERE?
          </Text>
          <Text
            className="text-center text-richBlack"
            style={[globalStyles.text2]}
          >
            Crete your account to proceed further
          </Text>
        </View>
        {/* ------------------------------------input part------------------------------------------------------ */}
        <View className="mt-8 mx-10" style={[globalStyles.flexCenter]}>
          <View className="w-full ">
            <TextInput
              style={[globalStyles.inputStyle]}
              className="bg-beige px-12"
              placeholder="enter your nick-name"
              onChangeText={(name) => setName(name)}
              autoCorrect={false}
            />
            <FeatherIcon
              name="user"
              className="text-grey"
              size={15}
              style={[globalStyles.icon]}
            />
          </View>
          <View className="w-full mt-8">
            <TextInput
              style={[globalStyles.inputStyle]}
              className="bg-beige px-12"
              placeholder="enter your email id"
              onChangeText={(email)=> setEmail(email)}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
            <FeatherIcon
              name="mail"
              className="text-grey"
              size={15}
              style={[globalStyles.icon]}
            />
          </View>
          <View className="w-full mt-8">
            <TextInput
              style={[globalStyles.inputStyle]}
              className="bg-beige px-12"
              secureTextEntry={passwordVisible}
              placeholder="create password"
              onChangeText={(password)=> setPassword(password)}
              autoCapitalize="none"
              autoCorrect={false}
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
            onPress={() => registerUser(email, password, name)}
          >
            <View
              className="bg-Licorice"
              style={[globalStyles.inputStyle, globalStyles.flexCenter]}
            >
              <Text className="text-white" style={[globalStyles.text3]}>
                SIGN UP
              </Text>
            </View>
          </TouchableOpacity>
          <View className="mt-8" style={[globalStyles.flexCenter]}>
            <Pressable onPress={() => navigation.navigate("GetStarted")}>
              <Text style={[globalStyles.text4]}>Login</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
