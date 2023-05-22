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
  Alert,
  ScrollView,
} from "react-native";
import { useCallback } from "react";
import { SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { firebase } from "../../config";
// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import { globalStyles } from "../globalStyles/CommonStyles";
import { screenSize } from "../globalStyles/CommonStyles";
// --------------------------------------------------------------------
// CRUD FILES
// --------------------------------------------------------------------
import CreateNote from "./NoteCRUD/CreateNote";
import DeleteNote from "./NoteCRUD/DeleteNote";
// --------------------------------------------------------------------
// COMPONENTS
// --------------------------------------------------------------------
import Searchbar from "./NoteComponents/Searchbar";
// --------------------------------------------------------------------
// Vector Icons
// --------------------------------------------------------------------
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

const Notes = ({ navigation }) => {
  const [notes, setNotes] = useState([]);
  const [userId, setUserId] = useState(null);

  const fetchNotes = useCallback(async () => {
    try {
      const snapshot = await firebase
        .firestore()
        .collection("notes")
        .where("userId", "==", userId)
        .get();

      const fetchedNotes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNotes(fetchedNotes);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
      // Handle the error appropriately
    }
  }, [userId]);

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (user) {
      setUserId(user.uid);
    }
  }, []);

  useEffect(() => {
    if (userId) {
      fetchNotes();
    }
  }, [fetchNotes, userId]);

  const handleCreateNote = async (title, content) => {
    try {
      if (!userId) {
        console.error("User is not logged in");
        return;
      }

      const noteId = await CreateNote(title, content, userId);
      console.log("New note created with ID:", noteId);
      fetchNotes(); // Fetch the updated notes after creating a new note
    } catch (error) {
      console.error("Failed to create note:", error);
      // Handle the error appropriately
    }
  };

  const handleDeleteNote = async (noteId) => {
    try {
      Alert.alert("Delete Note", "Are you sure you want to delete this note?", [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: async () => {
            try {
              await firebase
                .firestore()
                .collection("notes")
                .doc(noteId)
                .delete();
              console.log("Note deleted successfully");
              fetchNotes(); // Fetch the updated notes after deleting a note
            } catch (error) {
              console.error("Error deleting note:", error);
              // Handle the error appropriately
            }
          },
        },
      ]);
    } catch (error) {
      console.error("Error deleting note:", error);
      // Handle the error appropriately
    }
  };

  const sortedNotes = [...notes].sort((a, b) => b.createdAt - a.createdAt);

  const [filteredNotes, setFilteredNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const fetchFilteredNotes = useCallback(async () => {
    try {
      let query = firebase
        .firestore()
        .collection("notes")
        .where("userId", "==", userId);
      if (searchQuery) {
        query = query.where("title", "==", searchQuery);
      }
  
      const snapshot = await query.get();
  
      const fetchedNotes = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      setFilteredNotes(fetchedNotes); // Update filteredNotes state
    } catch (error) {
      console.error("Failed to fetch notes:", error);
      // Handle the error appropriately
    }
  }, [userId, searchQuery]);
  
  useEffect(() => {
    if (userId) {
      fetchFilteredNotes();
    }
  }, [fetchFilteredNotes, userId, searchQuery]);  
  

  const renderNoteItem = ({ item }) => (
    <View className="p-8 bg-Licorice my-2 mx-6" style={[globalStyles.card]}>
      <View className="pb-1" style={[globalStyles.flexJustify]}>
        <AntDesign
          name="edit"
          size={15}
          style={[globalStyles.icon5]}
        />
        <DeleteNote
          noteId={item.id}
          onDelete={() => handleDeleteNote(item.id)}
        />
      </View>
      <Text className="text-white" style={[globalStyles.text8]}>
        {item.title}
      </Text>
      <Text className="text-white pt-3 pb-16" style={[globalStyles.text6]}>
        {item.content}
      </Text>
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={[screenSize.height, screenSize.width, globalStyles.dummyView]}
      >
        <View style={{ flex: 1 }}>
          <View style={[ globalStyles.flexJustify ]}>
          <Text
            className="mx-6 mt-20 -mb-5 text-Licorice"
            style={[globalStyles.text1]}
          >
            YOUR NOTES
          </Text>
          <TouchableOpacity
          className="absolute right-8 mt-24"
          
        >
          <AntDesign
            name="home"
            size={25}
            style={[globalStyles.icon3]}
            onPress={() => navigation.navigate('Home')}
          />
        </TouchableOpacity>
          </View>
          

          <Text
            className="px-8 mt-6"
            style={[globalStyles.text5, globalStyles.lineheight]}
          >
            You can add, search, update and delete your note
          </Text>
          <View className="-mt-12">
            <Searchbar searchQuery={searchQuery} onSearch={handleSearch} />
          </View>
          <FlatList
            className="mt-6"
            style={{ flex: 1 }}
            data={searchQuery ? filteredNotes : sortedNotes}
            renderItem={renderNoteItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 80 }}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity
          className="bg-coral rounded-full"
          style={[globalStyles.float]}
          onPress={() => navigation.navigate("AddNote", { handleCreateNote })}
        >
          <Ionicons name="ios-add-sharp" size={46} />
        </TouchableOpacity>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Notes;
