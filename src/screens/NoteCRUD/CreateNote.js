import {firebase} from "../../../config"

const CreateNote = async (title, content, userId) => {
    try {
      const docRef = await firebase.firestore().collection("notes").add({
        title: title,
        content: content,
        userId: userId,
      });
      console.log("Note created with ID:", docRef.id);
      return docRef.id; // Return the ID of the created note
    } catch (error) {
      console.error("Error creating note:", error);
      throw error; // Throw the error for error handling
    }
  };

export default CreateNote