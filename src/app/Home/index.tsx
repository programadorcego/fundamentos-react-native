import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function Home() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(prev => prev + 1);
  }

  return (
    <View style={styles.mainContainer}>
      <Text>Contador: {count}</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed
        ]}
        onPress={handleIncrease}
        accessibilityRole="button"
        accessibilityLabel="Clique para aumentar o contador"
      >
        <Text style={styles.buttonText}>Aumentar</Text>
      </Pressable>
    </View>
  );
}
