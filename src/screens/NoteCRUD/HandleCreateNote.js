export const handleCreateNote = async (title, content) => {
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