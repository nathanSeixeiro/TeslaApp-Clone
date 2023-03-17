import { FlatList } from "react-native-gesture-handler";
import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import menuOptions from "../assets/menuOptions";
import MenuOption from "../components/MenuOption";
import Controls from "./../components/Controls";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <FontAwesome name="user-circle" size={30} color="gray" />
      </View>

      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={MenuOption}
        ListHeaderComponent={Controls}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#161818",
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 25,
    color: "#eee",
    fontWeight: "bold",
    marginBottom: 7,
  },
  subtitle: {
    fontSize: 15,
    color: "gray",
    fontWeight: "500",
  },
});
