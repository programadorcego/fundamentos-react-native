import { Text, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.mainContainer}>
      <Text style={{color: "blue", fontSize: 40}}>Meu texto</Text>
      <Text style={styles.text}>Outro texto</Text>
    </View>
  );
}
