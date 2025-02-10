import React from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  type PressableProps,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary" | "outline";
}

const CustomButton: React.FC<PressableProps & CustomButtonProps> = ({
  title,
  onPress,
  disabled = false,
  loading = false,
  variant = "primary",
  ...otherProps
}) => {
  return (
    <Pressable
      style={[
        styles.button,
        variant === "primary" && styles.primary,
        variant === "secondary" && styles.secondary,
        variant === "outline" && styles.outline,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      {...otherProps}
    >
      {loading ? (
        <ActivityIndicator color={variant === "outline" ? "#000" : "#fff"} />
      ) : (
        <Text
          style={[styles.text, variant === "outline" && styles.outlineText]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBlock: 12,
    paddingInline: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
  },
  primary: {
    backgroundColor: "#007bff",
  },
  secondary: {
    backgroundColor: "#6c757d",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#007bff",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  outlineText: {
    color: "#007bff",
  },
  disabled: {
    backgroundColor: "#ccc",
  },
});

export default CustomButton;
