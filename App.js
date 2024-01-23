import { useState } from "react";
import { StatusBar } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
} from "react-native";

export default function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");
  const [data, setData] = useState([]);

  const addition = () => {
    setResult(Number(number1) + Number(number2));
    setData([
      ...data,
      {
        key:
          number1 +
          " + " +
          number2 +
          " = " +
          (Number(number1) + Number(number2)),
      },
    ]);
  };

  const substraction = () => {
    setResult(number1 - number2);
    setData([
      ...data,
      { key: number1 + " - " + number2 + " = " + (number1 - number2) },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.fields}>
        <Text>Result: {result}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(number) => setNumber1(number)}
          value={number1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={(number) => setNumber2(number)}
          value={number2}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttons}>
        <Button title="+" onPress={addition} />
        <Button title="-" onPress={substraction} />
      </View>
      <View style={styles.list}>
        <Text>History</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  fields: {
    alignItems: "center",
  },
  input: {
    width: 200,
    borderColor: "grey",
    borderWidth: 1,
  },
  buttons: {
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  list: {
    paddingTop: 10,
    alignItems: "center",
  },
});
