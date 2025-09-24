import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { MedalData } from "./Medal";

export default function Achiev() {
  return (
    <View >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {MedalData.map((item) => (
          <View key={item.id} style={styles.boxLower}>
            <Image source={item.image} style={styles.icon} />
            <Text style={styles.badgeText}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  boxLower: {
    backgroundColor: "white",
    width: 90,
    height: 90,
    borderRadius: 45,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
    width: 40,
    height: 40,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
    textAlign: "center",
  },
});
