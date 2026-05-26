import { Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Button } from "@/components/button";

export function Home() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(prev => prev + 1);
  }

  return (
    <View style={styles.mainContainer}>
      <Text>Contador: {count}</Text>

      <Button title="Aumentar" onPress={handleIncrease} accessibilityLabel="Clique para aumentar o contador" />
    </View>
  );
}
