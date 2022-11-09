import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Subtitle = ({ children }) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "800",
  },
});
