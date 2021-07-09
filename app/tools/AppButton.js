import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const AppButton = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#eeeeee",
    borderWidth: 10,
    borderColor: "#eeeeee",
    borderRadius: 10,
    width: 200,
    alignItems: "center",
    margin: 2,
  },
  text: {
    color: "#0084d1",
    fontSize: 30,
  },
});

export default AppButton;
