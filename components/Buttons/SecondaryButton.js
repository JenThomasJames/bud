import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../../utils/colors";
const SecondaryButton = ({ children }) => {
  return (
    <Pressable>
      <View style={styles.btn}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Pressable>
  );
};
export default SecondaryButton;
const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderColor: Colors.primary700,
    margin: 20,
    paddingHorizontal: 32,
    paddingVertical: 18,
    borderRadius: 33,
  },
  text: {
    color: Colors.primary700,
  },
});
