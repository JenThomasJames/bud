import { StyleSheet, View, Pressable } from "react-native";
import Colors from "../../utils/colors";
import { Ionicons } from "@expo/vector-icons";
const IconButton = ({ name, size, color }) => {
  return (
    <Pressable>
      <View style={styles.btn}>
        <Ionicons name={name} size={size} color={color} />
      </View>
    </Pressable>
  );
};
export default IconButton;
const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary700,
    margin: 20,
    padding: 20,
    borderRadius: 100,
  },
  text: {
    color: Colors.primary700,
    fontWeight: "800",
  },
});
