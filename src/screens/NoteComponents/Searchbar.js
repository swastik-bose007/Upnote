import { View, Text, TextInput } from 'react-native'
import React from 'react'
// --------------------------------------------------------------------
// STYLES
// --------------------------------------------------------------------
import { globalStyles } from "../../globalStyles/CommonStyles";
import { screenSize } from "../../globalStyles/CommonStyles";
// --------------------------------------------------------------------
// Vector Icons
// --------------------------------------------------------------------
import FeatherIcon from "@expo/vector-icons/Feather";

const Searchbar = ({ searchQuery, onSearch }) => {
    const handleSearch = (query) => {
        onSearch(query);
        console.log('Search query:', query);
      };
  return (
      <View className="mt-8 mx-6" style={[globalStyles.flexCenter]}>
        <View className="w-full mt-8">
            <TextInput
              style={[globalStyles.inputStyle]}
              className="bg-beige px-12"
              placeholder="search note"
              onChangeText={handleSearch}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <FeatherIcon
              name="search"
              className="text-grey"
              size={15}
              style={[globalStyles.icon]}
            />
          </View>
      </View>
  )
}

export default Searchbar