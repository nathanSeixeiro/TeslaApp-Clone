import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import climateImage from "../assets/images/climate.png";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import ButtonBack from "./../components/ButtonBack";
import { useState } from "react";

const ClimateScreen = () => {
  const [temperature, setTemperature] = useState(0);
  const handleTemperature = () => {
    setTemperature((prevState) => prevState - 1);
  };
  const handleTemperaturePlus = () => {
    setTemperature((prevState) => prevState + 1);
  };

  const [on, setOn] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={climateImage} style={styles.image} resizeMode="cover" />

      <ButtonBack />

      <View style={styles.footer}>
        <Text style={styles.label}>
          Interior {temperature}°F - Exterior 66°F
        </Text>
        <View style={styles.controlsRow}>
          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons
              name="power"
              size={42}
              color={on ? "white" : "gray"}
              onPress={() => setOn(!on)}
            />
            <Text style={styles.iconButtonText}> {on ? "On" : "Off"} </Text>
          </View>

          <View style={styles.temperatureContainer}>
            <Entypo
              name="chevron-left"
              size={30}
              color="gray"
              onPress={handleTemperature}
            />
            <Text style={styles.textTemperature}>{temperature}</Text>
            <Entypo
              name="chevron-right"
              size={30}
              color="gray"
              onPress={handleTemperaturePlus}
            />
          </View>

          <View style={styles.iconButtonContainer}>
            <MaterialCommunityIcons name="car-door" size={42} color="gray" />
            <Text style={styles.iconButtonText}> vent </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161818",
  },
  image: {
    width: "100%",
    height: "65%",
  },
  footer: {
    alignItems: "center",
    padding: 12,
    marginBottom: 20,
    marginTop: "auto",
  },
  label: {
    color: "gray",
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 20,
  },
  controlsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  temperatureContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTemperature: {
    fontSize: 48,
    fontWeight: "300",
    color: "white",
    marginHorizontal: 20,
  },
  iconButtonContainer: {
    alignItems: "center",
  },
  iconButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
});

export default ClimateScreen;
