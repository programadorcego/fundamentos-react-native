import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.mainContainer}>
      <Text style={{color: "blue", fontSize: 40}}>Meu texto</Text>
      <Text style={styles.text}>Outro texto</Text>

      <Image
        source={require("../../assets/logo.png")}
        style={{width: 64, height: 64}}
        accessibilityLabel="Descrição da Logo"
      />

      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{width: 64, height: 64}}
        accessibilityLabel="Descrição da Logo"
      />
    </View>
  );
}
