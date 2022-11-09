import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../../utils/colors";
const PrimaryButton = ({ children }) => {
  return (
    <Pressable>
      <View style={styles.btn}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};
export default PrimaryButton;
const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary700,
    paddingHorizontal: 32,
    paddingVertical: 18,
    borderRadius: 33,
  },
  text: {
    color: Colors.secondary100,
  },
});
