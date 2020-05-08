import React from "react";
import { Box } from "./Box";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const BORDER_WIDTH = 1;
export function SelectionBox({ onSetValue, selectionIndex }) {
  const y = Math.floor(selectionIndex / 9);
  const x = selectionIndex % 9;
  const top = y * 32 - 32 - BORDER_WIDTH;
  const left = x * 32 - 32 - BORDER_WIDTH;
  return (
    <View style={[styles.selectionBox, { top: top, left: left }]}>
      <View style={styles.row}>
        <Box style={styles.zTop} number={1} onPress={() => onSetValue(1)} />
        <Box style={styles.zTop} number={2} onPress={() => onSetValue(2)} />
        <Box style={styles.zTop} number={3} onPress={() => onSetValue(3)} />
      </View>
      <View style={styles.row}>
        <Box style={styles.zTop} number={4} onPress={() => onSetValue(4)} />
        <Box style={styles.zTop} number={5} onPress={() => onSetValue(5)} />
        <Box style={styles.zTop} number={6} onPress={() => onSetValue(6)} />
      </View>
      <View style={styles.row}>
        <Box style={styles.zTop} number={7} onPress={() => onSetValue(7)} />
        <Box style={styles.zTop} number={8} onPress={() => onSetValue(8)} />
        <Box style={styles.zTop} number={9} onPress={() => onSetValue(9)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectionBox: {
    position: "absolute",
    //left: -32,
    //top: -32,
    zIndex: 100,
    borderWidth: BORDER_WIDTH,
    borderColor: "red",
  },
  row: {
    flexDirection: "row",
  },
  zTop: {
    zIndex: 100,
  },
});
