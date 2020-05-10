import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { STYLE_LOOKUP, styles as boxStyle } from "./DefaultSudokuStyle";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    width: 30,
    height: 30,
    margin: 1,
  },
  text: {
    color: "#fff",
  },
});

export function Box({ onPress, number, index, style }) {
  let borderStyle = [boxStyle.defaultBorder];
  if (index in STYLE_LOOKUP) {
    borderStyle = STYLE_LOOKUP[index];
  }

  return (
    <TouchableOpacity
      style={[{ zIndex: 0 }, ...borderStyle, ...[style]]}
      onPress={(e) => {
        onPress(number, index);
        console.log(e, "Location:", e.nativeEvent.locationX);
      }}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
}
