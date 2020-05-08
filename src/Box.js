import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export function Box({ onPress, number, index, style }) {
  return (
    <TouchableOpacity
      style={[{ zIndex: 0 }, ...[style]]}
      onPress={() => onPress(number, index)}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
    padding: 5,
    width: 30,
    height: 30,
    margin: 1,
  },
  text: {
    color: "#fff",
  },
});
