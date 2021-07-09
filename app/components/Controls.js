import React, { useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import AppButton from "../tools/AppButton";

const Controls = ({ ip }) => {
  const [loading, setLoading] = useState(false);

  const api = (preset) => {
    setLoading(true);
    console.log(`http://${ip}:3333/${preset}`);
    fetch(`http://${ip}:3333/${preset}`)
      .then((data) => data.json())
      .then((data) => data.status === "success" && setLoading(false));
  };
  return (
    <View style={styles.container}>
      {(!loading && (
        <>
          <AppButton title="Metars" onPress={() => api("metars")} />
          <AppButton title="America" onPress={() => api("america")} />
          <AppButton title="Red" onPress={() => api("red")} />
          <AppButton title="Blue" onPress={() => api("blue")} />
          <AppButton title="Green" onPress={() => api("green")} />
          <AppButton title="Off" onPress={() => api("off")} />
        </>
      )) || (
        <ActivityIndicator size="large" style={styles.act} color="#eeeeee" />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  act: {
    top: 50,
  },
});

export default Controls;
