import { useEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { StyleSheet, Text } from "react-native";

import CustomButton from "@/components/CustomButton";
import CustomHeader from "@/components/CustomHeader";

function Home() {
  const router = useRouter();

  return (
    <>
      {/* <Stack.Screen options={{ title: "Home", headerShown: true }} /> */}
      <CustomHeader title="Home" />
      <ThemedView style={styles.body}>
        <ThemedText>
          Click to open an <Text style={{ fontWeight: 700 }}>iPay</Text> payment gateway
        </ThemedText>
        <CustomButton
          title="Open Gateway"
          onPress={() => router.push("/lost-route")}
        />
        {/* <Link href="/lost-route">
          <Button title="Go to Lostness" />
        </Link> */}
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#f69422",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
