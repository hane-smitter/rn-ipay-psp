import { ThemedText } from "@/components/ThemedText";
import { useRouter } from "expo-router";
import { StyleSheet, Text, Image } from "react-native";

import CustomButton from "@/components/CustomButton";
import ParallaxScrollView from "@/components/ParallaxScrollView";

function Home() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      screenTitle="Home"
      headerBgColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial_ipaylogo_cutout.png")}
          style={styles.ipayLogo}
        />
      }
      contentViewStyle={styles.body}
    >
      <ThemedText>
        Click to open an <Text style={{ fontWeight: 700 }}>iPay</Text> payment
        gateway
      </ThemedText>
      <CustomButton
        title="Open Gateway"
        onPress={() => router.push("/lost-route")}
      />
      {/* <Link href="/lost-route">
          <Button title="Go to Lostness" />
        </Link> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    // flex: 1,
    backgroundColor: "#f69422",
    alignItems: "center",
    justifyContent: "center",
  },
  ipayLogo: {
    // display: "none",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",
    left: 0,
    bottom: -50,
  },
});

export default Home;
