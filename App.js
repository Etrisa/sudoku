import React, { useState } from "react";
import _ from "lodash";
import { Box } from "./src/Box";
import { SelectionBox } from "./src/SelectionBox";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

export default function App() {
  const [numbers, setNumbers] = useState(
    [...Array(81).keys()].map(function (n) {
      return 0;
    })
  );

  const [selectionIndex, setSelectionIndex] = useState(null);

  function renderRow(numbers, rowKey) {
    return (
      <View style={styles.row} key={rowKey}>
        {numbers.map(function (n, key) {
          //Component FieldBox
          return (
            <Box
              onPress={() => setSelectionIndex(rowKey * 9 + key)}
              number={n}
              key={key}
              index={rowKey * 9 + key}
            />
          );
        })}
      </View>
    );
  }

  const onSelectionBoxPress = (number, index) => {
    const newNumbers = [...numbers];
    newNumbers[index] = number;
    setNumbers(newNumbers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        The <strike>non</strike> retarded sudoku android app.
      </Text>
      {/*This creates the playing field*/}
      <View>
        {selectionIndex !== null && (
          <SelectionBox
            selectionIndex={selectionIndex}
            onSetValue={(n) => {
              onSelectionBoxPress(n, selectionIndex);
              setSelectionIndex(null);
            }}
          />
        )}
        {_.chunk(numbers, 9).map(function (n, key) {
          return renderRow(n, key);
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: "30px",
  },
});
