import { FlatList, Text, View } from "react-native";
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
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatContainer}
      />
    </View>
  );
}
