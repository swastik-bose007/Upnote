// DeleteNote.js
import React from "react";
import { Alert, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import { globalStyles } from "../../globalStyles/CommonStyles";

const DeleteNote = ({  onDelete }) => {
  return (
    <TouchableOpacity onPress={onDelete}>
      <AntDesign
        name="delete"
        size={15}
        style={[globalStyles.icon4, globalStyles.padd]}
      />
    </TouchableOpacity>
  );
};

export default DeleteNote;
