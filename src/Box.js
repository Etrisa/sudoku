import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

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
  defaultBorder: {
    borderWidth: 1,
    borderColor: "#fffa",
  },
  topBorder: {
    borderTopWidth: 1,
    borderTopColor: "red",
  },
  leftBorder: {
    borderLeftWidth: 1,
    borderLeftColor: "red",
  },
  rightBorder: {
    borderRightWidth: 1,
    borderRightColor: "red",
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "red",
  },
});

const STYLE_LOOKUP = {
  //Box 1 3*3
  0: [styles.defaultBorder, styles.topBorder, styles.leftBorder],
  1: [styles.defaultBorder, styles.topBorder],
  2: [styles.defaultBorder, styles.topBorder, styles.rightBorder],
  9: [styles.defaultBorder, styles.leftBorder],
  10: [styles.defaultBorder],
  11: [styles.defaultBorder, styles.rightBorder],
  18: [styles.defaultBorder, styles.leftBorder, styles.bottomBorder],
  19: [styles.defaultBorder, styles.bottomBorder],
  20: [styles.defaultBorder, styles.rightBorder, styles.bottomBorder],
  //Box 2 3*3
  3: [styles.defaultBorder, styles.topBorder, styles.leftBorder],
  4: [styles.defaultBorder, styles.topBorder],
  5: [styles.defaultBorder, styles.topBorder, styles.rightBorder],
  12: [styles.defaultBorder, styles.leftBorder],
  13: [styles.defaultBorder],
  14: [styles.defaultBorder, styles.rightBorder],
  21: [styles.defaultBorder, styles.leftBorder, styles.bottomBorder],
  22: [styles.defaultBorder, styles.bottomBorder],
  23: [styles.defaultBorder, styles.rightBorder, styles.bottomBorder],
  //Box 3 3*3
  6: [styles.defaultBorder, styles.topBorder, styles.leftBorder],
  7: [styles.defaultBorder, styles.topBorder],
  8: [styles.defaultBorder, styles.topBorder, styles.rightBorder],
  15: [styles.defaultBorder, styles.leftBorder],
  16: [styles.defaultBorder],
  17: [styles.defaultBorder, styles.rightBorder],
  24: [styles.defaultBorder, styles.leftBorder, styles.bottomBorder],
  25: [styles.defaultBorder, styles.bottomBorder],
  26: [styles.defaultBorder, styles.rightBorder, styles.bottomBorder],
  //Box 4 3*3
  27: [styles.defaultBorder, styles.topBorder, styles.leftBorder],
  28: [styles.defaultBorder, styles.topBorder],
  29: [styles.defaultBorder, styles.topBorder, styles.rightBorder],
  36: [styles.defaultBorder, styles.leftBorder],
  37: [styles.defaultBorder],
  38: [styles.defaultBorder, styles.rightBorder],
  45: [styles.defaultBorder, styles.leftBorder, styles.bottomBorder],
  46: [styles.defaultBorder, styles.bottomBorder],
  47: [styles.defaultBorder, styles.rightBorder, styles.bottomBorder],
  //Box 5 3*3
  30: [styles.defaultBorder, styles.topBorder, styles.leftBorder],
  31: [styles.defaultBorder, styles.topBorder],
  32: [styles.defaultBorder, styles.topBorder, styles.rightBorder],
  39: [styles.defaultBorder, styles.leftBorder],
  40: [styles.defaultBorder],
  41: [styles.defaultBorder, styles.rightBorder],
  48: [styles.defaultBorder, styles.leftBorder, styles.bottomBorder],
  49: [styles.defaultBorder, styles.bottomBorder],
  50: [styles.defaultBorder, styles.rightBorder, styles.bottomBorder],
  //Box 6 3*3
  33: [styles.defaultBorder, styles.topBorder, styles.leftBorder],
  34: [styles.defaultBorder, styles.topBorder],
  35: [styles.defaultBorder, styles.topBorder, styles.rightBorder],
  42: [styles.defaultBorder, styles.leftBorder],
  43: [styles.defaultBorder],
  44: [styles.defaultBorder, styles.rightBorder],
  51: [styles.defaultBorder, styles.leftBorder, styles.bottomBorder],
  52: [styles.defaultBorder, styles.bottomBorder],
  53: [styles.defaultBorder, styles.rightBorder, styles.bottomBorder],
  //Box 7 3*3
  54: [styles.defaultBorder, styles.topBorder, styles.leftBorder],
  55: [styles.defaultBorder, styles.topBorder],
  56: [styles.defaultBorder, styles.topBorder, styles.rightBorder],
  63: [styles.defaultBorder, styles.leftBorder],
  64: [styles.defaultBorder],
  65: [styles.defaultBorder, styles.rightBorder],
  72: [styles.defaultBorder, styles.leftBorder, styles.bottomBorder],
  73: [styles.defaultBorder, styles.bottomBorder],
  74: [styles.defaultBorder, styles.rightBorder, styles.bottomBorder],
  //Box 8 3*3
  57: [styles.defaultBorder, styles.topBorder, styles.leftBorder],
  58: [styles.defaultBorder, styles.topBorder],
  59: [styles.defaultBorder, styles.topBorder, styles.rightBorder],
  66: [styles.defaultBorder, styles.leftBorder],
  67: [styles.defaultBorder],
  68: [styles.defaultBorder, styles.rightBorder],
  75: [styles.defaultBorder, styles.leftBorder, styles.bottomBorder],
  76: [styles.defaultBorder, styles.bottomBorder],
  77: [styles.defaultBorder, styles.rightBorder, styles.bottomBorder],
  //Box 9 3*3
  60: [styles.defaultBorder, styles.topBorder, styles.leftBorder],
  61: [styles.defaultBorder, styles.topBorder],
  62: [styles.defaultBorder, styles.topBorder, styles.rightBorder],
  69: [styles.defaultBorder, styles.leftBorder],
  70: [styles.defaultBorder],
  71: [styles.defaultBorder, styles.rightBorder],
  78: [styles.defaultBorder, styles.leftBorder, styles.bottomBorder],
  79: [styles.defaultBorder, styles.bottomBorder],
  80: [styles.defaultBorder, styles.rightBorder, styles.bottomBorder],
};

export function Box({ onPress, number, index, style }) {
  let borderStyle = [styles.defaultBorder];
  console.log(index, index in STYLE_LOOKUP);
  if (index in STYLE_LOOKUP) {
    borderStyle = STYLE_LOOKUP[index];
  }

  return (
    <TouchableOpacity
      style={[{ zIndex: 0 }, ...borderStyle, ...[style]]}
      onPress={() => onPress(number, index)}
    >
      <View style={styles.container}>
        <Text style={styles.text}>{number}</Text>
      </View>
    </TouchableOpacity>
  );
}
