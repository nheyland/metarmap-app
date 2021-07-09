import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Instructions = () => {
  return (
    <View>
      <Text style={styles.text}>
        Please add an IP in settings, the IP can be found in the terminal on the
        Raspberry Pi whenever running the boot script.
      </Text>
      <Text style={styles.text}>Search for KEY_IP= ###.###.##.##</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    backgroundColor: "#0084d1",
    color: "#eeeeee",
    margin: 8,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  tutorial: {
    height: 100,
    width: 100,
  },
});
export default Instructions;
