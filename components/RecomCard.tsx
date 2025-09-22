import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function RecomCard() {
    return(
        <View style={{ marginVertical: 0,backgroundColor: "#e0f7fa", borderRadius: 20}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                    <View>
                        <Image source={require("../assets/kerala.jpg")} style={{width: 200, height: 150, borderRadius: 20, margin: 10}}/>
                    </View>
                    <View style = {styles.text}>
                        <Text style={{fontWeight: "bold", fontSize: 16, marginLeft: 10}}>Kerala</Text>
                    </View>
                </View>
                <View>
                    <View style = {styles.text}>
                        <Image source={require("../assets/kerala.jpg")} style={{width: 200, height: 150, borderRadius: 20, margin: 10}}/>
                    </View>
                    <View style = {styles.text}>
                        <Text style={{fontWeight: "bold", fontSize: 16, marginLeft: 10}}>Kerala</Text>
                    </View>
                </View>
                <View>
                    <View style = {styles.text}>
                        <Image source={require("../assets/kerala.jpg")} style={{width: 200, height: 150, borderRadius: 20, margin: 10}}/>
                    </View>
                    <View style = {styles.text}>
                        <Text style={{fontWeight: "bold", fontSize: 16, marginLeft: 10}}>Kerala</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
       
        justifyContent: "center",
        alignItems: "center"
    }
});