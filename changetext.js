import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState(
    "Hii pratham this is your first app"
  );
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title="changing text"
        onPress={() => setOutputText("the text has been changed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aqua",
    alignItems: "center",
    justifyContent: "center",
  },
});
