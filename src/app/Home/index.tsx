import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";

import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export function Home() {
  const [loaded, error] = useFonts({
    Inter_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

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
        renderItem={({ item }) => <Text style={{fontFamily: 'Inter_900Black'}}>{item.text}</Text>}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatContainer}
      />
    </View>
  );
}
