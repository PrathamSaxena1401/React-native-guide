import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 30 }}>
      <View style={styles.parentview}>
        <TextInput placeholder="Pratham write here" style={styles.textinputs} />
        <Button title="Add1" />
      </View>
      <View style={styles.parentview}>
        <TextInput
          placeholder="pratham write again"
          style={styles.textinputs}
        />
        <Button title="Add2" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  textinputs: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
