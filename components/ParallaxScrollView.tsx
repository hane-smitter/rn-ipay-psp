import type { PropsWithChildren, ReactElement } from "react";
import { StyleSheet, type ViewProps } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";
// import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useColorScheme } from "@/hooks/useColorScheme";
import CustomHeader from "./CustomHeader";
import { usePathname } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const HEADER_HEIGHT = 250;

type Props = PropsWithChildren<{
  headerImage: ReactElement;
  headerBgColor: { dark: string; light: string };
  contentViewStyle?: ViewProps["style"];
  screenTitle?: string;
}>;

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBgColor,
  contentViewStyle,
  screenTitle,
}: Props) {
  const screenTitleHeading = screenTitle || usePathname();

  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  // const bottom = useBottomTabOverflow();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <SafeAreaProvider>
      <CustomHeader title={screenTitleHeading} />
      <ThemedView style={styles.container}>
        <Animated.ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          // scrollIndicatorInsets={{ bottom }}
          contentContainerStyle={{ flex: 1 }}
        >
          <Animated.View
            style={[
              styles.header,
              { backgroundColor: headerBgColor[colorScheme] },
              headerAnimatedStyle,
            ]}
          >
            {headerImage}
          </Animated.View>
          <ThemedView
            style={[styles.content, contentViewStyle && contentViewStyle]}
          >
            {children}
          </ThemedView>
        </Animated.ScrollView>
      </ThemedView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
    position: "relative",
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
