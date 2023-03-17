import { StyleSheet, Text, View, Image } from "react-native";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

import car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";
import { FlatList } from "react-native-gesture-handler";

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

      <Image source={car} style={styles.image} resizeMode="contain" />

      <View style={styles.controls}>
        <Entypo name="lock" size={26} color="gray" />
        <MaterialCommunityIcons name="fan" size={26} color="gray" />
        <FontAwesome5 name="bolt" size={26} color="gray" />
        <Ionicons name="car-sport-sharp" size={26} color="gray" />
      </View>

      <FlatList
        data={menuOptions}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.optionRow}>
            <MaterialCommunityIcons
              name={item.iconName}
              size={26}
              color="gray"
            />
            <Text style={styles.optionText}>{item.name}</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="gray"
              style={{ marginLeft: "auto" }}
            />
          </View>
        )}
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
  image: {
    width: "100%",
    height: 300,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  optionRow: {
    flexDirection: "row",
    marginVertical: 20,
    alignItems: "center",
  },
  optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
  },
});
