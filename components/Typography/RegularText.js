import { View, Text, StyleSheet } from "react-native";
import React from "react";

const RegularText = ({ children }) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default RegularText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
