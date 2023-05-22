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
  FlatList,
  Button,
} from "react-native";
import { useCallback } from "react";
import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import { globalStyles } from "../../globalStyles/CommonStyles";
import { screenSize } from "../../globalStyles/CommonStyles";
// --------------------------------------------------------------------
// Vector Icons
// --------------------------------------------------------------------
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

const AddNote = ({ navigation, route }) => {
  const { handleCreateNote } = route.params;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSaveNote = async () => {
    await handleCreateNote(title, content);
    navigation.navigate("Notes"); // Redirect to the Notes screen
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={[screenSize.height, screenSize.width, globalStyles.dummyView]}
      >
        <View>
          <View style={[globalStyles.flexCenter]}>
            {/* <Welcome className="mt-16" /> */}
            <Text className="mt-32 text-Licorice" style={[globalStyles.text1]}>
              CREATE NOTE
            </Text>
            <Text
              className="text-center text-richBlack"
              style={[globalStyles.text2]}
            >
              Crete your account to proceed further
            </Text>
          </View>
          <View className="mx-10">
            <TextInput
              style={[globalStyles.inputStyle]}
              className="bg-beige px-12 mt-10"
              placeholder="Enter the title"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={[globalStyles.inputStyle2]}
              className="bg-beige px-12 mt-8"
              placeholder="enter the content"
              value={content}
              onChangeText={setContent}
              multiline
              numberOfLines={4}
            />
            <TouchableOpacity
              className="w-full mt-24"
              activeOpacity={0.9}
              onPress={handleSaveNote}
            >
              <View
                className="bg-Licorice"
                style={[globalStyles.inputStyle, globalStyles.flexCenter]}
              >
                <Text className="text-white" style={[globalStyles.text3]}>
                  CREATE NOTE
                </Text>
              </View>
            </TouchableOpacity>
            <View style={[globalStyles.flexCenter]}>
              <TouchableOpacity
                className="mt-16 bg-coral p-6 rounded-full"
                onPress={() => navigation.navigate("Notes")}
              >
                <AntDesign
                  name="close"
                  size={20}
                  style={[globalStyles.iconColor2]}
                />
              </TouchableOpacity>
            </View>
            {/* <Button title="Save Note" onPress={handleSaveNote} /> */}
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default AddNote;
