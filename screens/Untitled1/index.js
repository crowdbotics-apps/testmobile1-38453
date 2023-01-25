import { FlatList } from "react-native";
import { TextInput } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.qSJuBKzA}></TextInput><FlatList style={styles.nUDCzJkL} renderItem={() => <View style={styles.ircfaabt}><View style={styles.imdGpjRG}></View></View>} ItemSeparatorComponent={() => <View style={styles.vJzWnqVb}><View style={styles.khoIyCMH} /></View>} data={[1, 2, 3]} keyExtractor={item => item.toString()}></FlatList></ScrollView>
    <FlatList renderItem={() => <View style={styles.GqKitBEm}></View>} ItemSeparatorComponent={() => <View style={styles.tbKRAWfk} />} data={[1, 2, 3]} keyExtractor={item => item.toString()} style={styles.xIZMNiRf}></FlatList></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#cbc2c2"
  },
  qSJuBKzA: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  nUDCzJkL: {
    position: "absolute",
    width: 334,
    height: 150,
    left: 8,
    top: 61,
    flexDirection: "row",
    flex: "1"
  },
  imdGpjRG: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  khoIyCMH: {
    backgroundColor: "#000000",
    height: 1
  },
  fiaoSmem: {
    flex: 1
  },
  aFPRVylK: {
    flex: 1
  },
  tVoRKsKk: {
    flex: 1
  },
  rwdHRoYV: {
    flex: 1
  },
  SFyyDPuL: {
    flex: 1
  },
  BsmxBWgZ: {
    flex: 1
  },
  ircfaabt: {
    flex: 1
  },
  vJzWnqVb: {
    flex: 1
  },
  xIZMNiRf: {
    position: "absolute",
    width: 100,
    height: 150,
    left: 6,
    top: 224
  },
  GqKitBEm: {
    width: 92,
    height: 60,
    backgroundColor: "#FFFFFF"
  },
  tbKRAWfk: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled1;