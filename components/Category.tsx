import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Category() {
  return (
    <View style={{ marginVertical: 10 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          <View style={styles.item}>
            <View style={styles.circle} />
            <Text style={styles.text}>Category 1</Text>
          </View>
          <View style={styles.item}>
            <View style={styles.circle} />
            <Text style={styles.text}>Category 2</Text>
          </View>
          <View style={styles.item}>
            <View style={styles.circle} />
            <Text style={styles.text}>Category 3</Text>
          </View>
          <View style={styles.item}>
            <View style={styles.circle} />
            <Text style={styles.text}>Category 3</Text>
          </View>
          <View style={styles.item}>
            <View style={styles.circle} />
            <Text style={styles.text}>Category 3</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginHorizontal: 10,
  },
  item: {
    alignItems: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    marginBottom: 8,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
