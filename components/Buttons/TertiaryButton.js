import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../../utils/colors";
const TertiaryButton = ({ children }) => {
  return (
    <Pressable>
      <View style={styles.btn}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};
export default TertiaryButton;
const styles = StyleSheet.create({
  btn: {
    backgroundColor: "transparent",
    margin: 20,
    padding: 10,
  },
  text: {
    color: Colors.primary700,
    fontWeight: "800",
  },
});
