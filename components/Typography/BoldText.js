import { View, Text, StyleSheet } from "react-native";
import React from "react";

const BoldText = ({ children }) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default BoldText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "800",
  },
});
