import { StyleSheet, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ButtonBack = () => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()} style={styles.back}>
      <Entypo name="chevron-left" size={24} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  back: {
    position: "absolute",
    top: 50,
    left: 25,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#2f3030",
  },
});

export default ButtonBack;
