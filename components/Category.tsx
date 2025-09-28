import React from "react";
import { View, Text, StyleSheet, ScrollView,Image,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";



export default function Category() {
  const navigation = useNavigation<any>();

  return (
    <View style={{ marginVertical: 10 ,marginLeft: 20}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.row}>
          <View style={styles.item}>
            <View />
              <TouchableOpacity onPress={() => navigation.navigate("Track")}>
                <Image source={require("../assets/log.png")} style={{width: 90, height: 90, borderRadius: 50, backgroundColor: "white", marginBottom: 8}}/>
              </TouchableOpacity>
            <Text style={styles.text}>Log History</Text>
          </View>
          <View style={styles.item}>
            <View />
            <Image source={require("../assets/logtravel.png")} style={{width: 90, height: 90, borderRadius: 50, backgroundColor: "white", marginBottom: 8}}/>
            <Text style={styles.text}>Log Travel</Text>
          </View>
          <View style={styles.item}>
            <View />
            <Image source={require("../assets/track.png")} style={{width: 90, height: 90, borderRadius: 50, backgroundColor: "white", marginBottom: 8}}/>
            <Text style={styles.text}>Track </Text>
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
  // circle: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50,
  //   backgroundColor: "white",
  //   marginBottom: 8,
  // },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
