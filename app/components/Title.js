import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Title = ({ ip }) => {
  return (
    <View>
      <Text style={styles.text}>MetarMap</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    backgroundColor: "#0084d1",
    color: "#eeeeee",
    margin: 8,
  },
  line: {
    backgroundColor: "#eeeeee",
    height: 10,
  },
});
export default Title;
