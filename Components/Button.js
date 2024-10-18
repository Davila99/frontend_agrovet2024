import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../Constants/Colors";

const Button = ({ title, filled = false, color, style, onPress }) => {
  const backgroundColor = filled ? color || COLORS.primary : COLORS.white;
  const textColor = filled ? COLORS.white : COLORS.primary;

  return (
    <TouchableOpacity
      style={StyleSheet.flatten([styles.button, { backgroundColor }, style])}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default Button;
