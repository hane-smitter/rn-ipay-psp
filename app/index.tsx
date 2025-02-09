import { useEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link, Stack, useNavigation } from "expo-router";
import { Button, StyleSheet } from "react-native";

function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Home", // Set the header title
      headerShown: true, // Show the header
    });
  }, [navigation]);

  return (
    <>
      <Stack.Screen options={{ title: "Home" }} />
      <ThemedView style={styles.body}>
        <ThemedText>It is a wonderfuller HOME Screen</ThemedText>
        <Link href="/lost-route">
          <Button title="Go to Lostness" />
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fdf011",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
