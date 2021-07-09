import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppInput from "../tools/AppInput";
import AppButton from "../tools/AppButton";
const Configure = ({ ip, storeData }) => {
  const [temp, setTemp] = useState();

  return (
    <View style={styles.container}>
      <AppInput onChangeText={(x) => setTemp(x)} />
      <AppButton title="Update IP" onPress={() => storeData(temp)} />
      <Text style={styles.text}>
        {(ip && `Current IP is set to:  ${ip}`) || "Please set an IP"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    backgroundColor: "#0084d1",
    color: "#64eb34",
    margin: 8,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Configure;
