import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  const items = Array.from({ length: 50 }, (_, i) => {
    return {
      id: i + 1,
      text: `Item ${i + 1}`,
    };
  });

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {items.map(item => (
          <Text key={item.id}>{item.text}</Text>
        ))}
      </ScrollView>
    </View>
  );
}
