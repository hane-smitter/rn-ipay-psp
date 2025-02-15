import { useEffect } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { StyleSheet, Text, Image } from "react-native";

import CustomButton from "@/components/CustomButton";
import CustomHeader from "@/components/CustomHeader";
import ParallaxScrollView from "@/components/ParallaxScrollView";

function Home() {
  const router = useRouter();

  return (
    <>
      <CustomHeader title="Home" />
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/assets/images/partial_ipayLogo_cutout.png")}
            // style={styles.reactLogo}
          />
        }
        contentViewStyle={styles.body}
      >
        {/* <ThemedView style={styles.body}> */}
          <ThemedText>
            Click to open an <Text style={{ fontWeight: 700 }}>iPay</Text>{" "}
            payment gateway
          </ThemedText>
          <CustomButton
            title="Open Gateway"
            onPress={() => router.push("/lost-route")}
          />
          {/* <Link href="/lost-route">
          <Button title="Go to Lostness" />
        </Link> */}
        {/* </ThemedView> */}
      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    backgroundColor: "#f69422",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
