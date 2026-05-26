import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Button } from "@/components/button";

export function Home() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(prev => prev + 1);
  }

  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  return (
    <View style={styles.mainContainer}>
      <Text>Contador: {count}</Text>

      <Button title="Aumentar" onPress={handleIncrease} accessibilityLabel="Clique para aumentar o contador" />

      <TextInput
        onChangeText={setText}
        value={text}
        accessibilityLabel="Nome"
      />

      <TextInput
        onChangeText={setNumber}
        value={number}
        accessibilityLabel="Idade"
        keyboardType="numeric"
      />
    </View>
  );
}
