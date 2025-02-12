import { useNavigation, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigationState } from "@react-navigation/native";
import { IconSymbol } from "./ui/IconSymbol";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function CustomHeader({
  title,
  lightColor,
  darkColor,
}: {
  title: string;
  lightColor?: string;
  darkColor?: string;
}) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

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
          paddingInline: 16,
          height: 56,
          backgroundColor,
          ...Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2 /* Positive value creates shadow below */,
              },
              shadowOpacity: 0.1,
              shadowRadius: 3,
            },
            android: {
              // elevation: 5,
              borderBottomWidth: 0.3,
              borderBottomColor: "rgba(0,0,0,0.06)",
            },
          }),
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
            <IconSymbol name="chevron.left" size={24} color={"black"} />
          </TouchableOpacity>
        )}
        <Text style={{ fontSize: 20, fontWeight: 500, marginLeft: 15 }}>
          {title}
        </Text>
      </View>
    </SafeAreaView>
  );
}
