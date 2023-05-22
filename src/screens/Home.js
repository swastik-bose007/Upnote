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
import React, { useEffect, useState } from "react";
import { firebase } from "../../config";
// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import { globalStyles } from "../globalStyles/CommonStyles";
import { screenSize } from "../globalStyles/CommonStyles";
// --------------------------------------------------------------------
// Vector Icons
// --------------------------------------------------------------------
import FeatherIcon from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
// --------------------------------------------------------------------
// SVG Components
// --------------------------------------------------------------------
import IntroPeep from "../constants/Peep";
import FloatLogo from "../constants/TransparentLogo";

const Home = ({navigation}) => {

  const [name, setName] = useState("");

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("user does not exist");
        }
      });
  }, []);
  return (
    <SafeAreaView
      style={[screenSize.height, screenSize.width, globalStyles.dummyView]}
    >
      <View className="mx-5 mt-14" style={[globalStyles.flexJustify]}>
        <View className="">
          <Text className="text-Licorice" style={[globalStyles.text5]}>
            welcome
          </Text>
          <Text className="-mt-3" style={[globalStyles.text1]}>
            {name.name}
          </Text>
        </View>
        <TouchableOpacity
          className="absolute right-0"
          onPress={() => {
            firebase.auth().signOut();
          }}
        >
          <Ionicons
            name="md-exit-outline"
            size={25}
            style={[globalStyles.icon3]}
          />
        </TouchableOpacity>
      </View>
      <View
        className="mt-5 bg-Licorice shadow-beige mx-5 flex flex-row"
        style={[globalStyles.card]}
      >
        <View>
          <FloatLogo className="mx-6 mt-6 mb-3" />
          <Text className="mx-14 text-beige">Upnote</Text>
        </View>
        <View style={[globalStyles.leftadjust]}>
          <Text className="mt-8 text-white" style={[globalStyles.text7]}>
            LET'S NOTE
          </Text>
          <Text className="mt-2 text-white" style={[globalStyles.text6]}>
            Note the little important informations and access anytime
          </Text>
        </View>
      </View>
      <View className=" p-5 mt-16" style={[globalStyles.flexCenter]}>
        <IntroPeep />
        <Text
          className="text-center px-8 mt-5"
          style={[globalStyles.text5, globalStyles.lineheight]}
        >
          Don't need to give your brain pressure. just keep noting with upnote
        </Text>
      </View>
      <View style={[globalStyles.flexCenter]}>
        <TouchableOpacity
          className="mt-6 bg-Licorice p-6 rounded-full"
          onPress={() => navigation.navigate("Notes")}
        >
          <SimpleLineIcons
            name="pencil"
            size={20}
            style={[globalStyles.iconColor]}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
