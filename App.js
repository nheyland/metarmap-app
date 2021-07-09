import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Controls from "./app/components/Controls";
import Title from "./app/components/Title";
import Settings from "./app/components/Settings";
import Instructions from "./app/components/Instructions";
import Configure from "./app/components/Configure";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [settings, setSettings] = useState(false);
  const [ip, setIP] = useState(null);

  const storeData = async (value) => {
    console.log(value);
    try {
      await AsyncStorage.setItem("ipAddr2", value);
    } catch (e) {
      console.log(e);
    }
    getData();
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("ipAddr2");
      if (value !== null) {
        setIP(value);
      }
    } catch (e) {
      setIP(null);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <Title ip={ip} />
        <ScrollView style={styles.scrollview}>
          {!settings && ip ? <Controls ip={ip} /> : <Instructions />}
          {settings && <Configure ip={ip} storeData={storeData} />}
        </ScrollView>
        <Settings setSettings={setSettings} settings={settings} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0084d1",
  },
  scrollview: {
    padding: 10,
  },
});
