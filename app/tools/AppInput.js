import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

const AppInput = ({ value, onChangeText }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        keyboardType="decimal-pad"
        placeholderTextColor="#0084d1"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    backgroundColor: "#eeeeee",
    borderWidth: 10,
    borderColor: "#eeeeee",
    borderRadius: 10,
    width: 300,
    alignItems: "center",
    margin: 2,
    color: "#0084d1",
    fontSize: 30,
  },
});
export default AppInput;
