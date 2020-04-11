import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

export default function App() {
  const [enterInput, setenterInput] = useState("");
  const [allInput, setallInput] = useState([]);
  const InputHandler = (texts) => {
    setenterInput(texts);
  };
  const AddHandler = () => {
    setallInput([...allInput, enterInput]);
  };
  return (
    <View style={{ padding: 30 }}>
      <View style={styles.parentview}>
        <TextInput
          placeholder="Pratham write here"
          style={styles.textinputs}
          onChangeText={InputHandler}
          value={enterInput}
        />
        <Button title="Add1" onPress={AddHandler} />
      </View>
      <ScrollView>
        {allInput.map((goal) => (
          <View key={goal} style={styles.listitem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView>
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
  listitem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
