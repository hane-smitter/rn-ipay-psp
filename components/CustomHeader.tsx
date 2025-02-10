import { useNavigation, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomHeader({ title }: { title: string }) {
  const navigation = useNavigation();
  const params = useLocalSearchParams();

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
        {!isFrom404 && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ fontSize: 16, color: "blue" }}>Back</Text>
          </TouchableOpacity>
        )}
        <Text style={{ fontSize: 20, fontWeight: 500, marginLeft: 16 }}>
          {title}
        </Text>
      </View>
    </SafeAreaView>
  );
}
