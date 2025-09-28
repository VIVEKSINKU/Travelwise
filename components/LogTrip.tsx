import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Image, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Category from "./Category";
import RecomCard from "./RecomCard";
import Footer from "./Footer";

export default function LogTrip() {
  const navigation = useNavigation<any>();
  return (
      <SafeAreaView style={{ backgroundColor: "#a3e4fbff", flex: 1 }}>
        <View style={styles.imgContainer}>
          <Image
            source={require("../assets/kerala.jpg")}
            resizeMode="cover"
            style={styles.img}
          />
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.text1}>Category</Text>
          </View>
          <View>
            <Category />
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginBottom: 10 }}>
            <View>
              <Text style={styles.recomText1}>Recomended</Text>
            </View>
            {/* <View>
                    <Text style={{ fontWeight: "bold" }}>See More</Text>
                </View> */}
            <Button
              title="See More"
              onPress={() => navigation.navigate("More")}
            />
          </View>
          <View>
            <RecomCard />
          </View>
          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <Footer />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    imgContainer: {
      overflow: "hidden",
      borderBottomLeftRadius: 45,
      borderBottomRightRadius: 45,
      marginTop: 50,
    },
    img: {
      width: "100%",
      height: 210,

    },
    container: {
      flex: 1,
      padding: 10,
    },
    text1: {
      fontSize: 20,
      fontWeight: "bold",
      margin: 25,
    },
    recomText1: {
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 25,
    }

  });
