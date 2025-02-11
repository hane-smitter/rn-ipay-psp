import { useNavigation, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigationState } from "@react-navigation/native";
import { IconSymbol } from "./ui/IconSymbol";

export default function CustomHeader({ title }: { title: string }) {
  const navigation = useNavigation();
  const params = useLocalSearchParams();

  // Get the navigation state to check the history stack
  const navigationState = useNavigationState((state) => state);

  // Check if there is more than one route in the history stack
  const canGoBack = navigationState.routes.length > 1;

  // Check if the navigation is coming from the 404 screen
  const isFrom404 = params.from404 === "true";

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          height: 56,
        }}
      >
        {/* Conditionally render the back button */}
        {canGoBack && !isFrom404 && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginInlineEnd: 25 }}
            hitSlop={10}
          >
            {/* <Text style={{ fontSize: 16, color: "blue" }}>Back</Text> */}
            <IconSymbol
              name="arrowkeys.left.filled"
              size={24}
              color={"black"}
            />
          </TouchableOpacity>
        )}
        <Text style={{ fontSize: 20, fontWeight: 500, marginLeft: 20 }}>
          {title}
        </Text>
      </View>
    </SafeAreaView>
  );
}
