import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../tools/AppButton";

const Settings = ({ settings, setSettings }) => {
  return (
    <View style={styles.container}>
      <AppButton
        title={(!settings && "Settings") || "Controls"}
        style={styles.text}
        onPress={() => setSettings(!settings)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    bottom: 50,
    right: 0,
  },
});
export default Settings;
