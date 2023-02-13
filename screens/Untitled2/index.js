import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";

const Home = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  WdFrkHEX: {
    height: 547,
    width: 335,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  UAsmEBAo: {
    height: 574,
    width: 358,
    backgroundColor: "#837979",
    borderRadius: 10,
    color: "#777777",
    opacity: 1,
    position: "relative"
  },
  ZfIrCuaA: {
    width: 107,
    height: 62
  },
  UMwHEUhC: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 10,
    color: "#777777",
    position: "absolute",
    left: 100,
    top: 415
  },
  AFAUcFgP: {
    width: 58,
    height: 50,
    lineHeight: 50,
    fontSize: 17,
    borderRadius: 0,
    position: "absolute",
    left: 41,
    fontWeight: "700",
    top: 5
  }
});
export default Home;