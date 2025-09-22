import React from "react";
import {View, Text, StyleSheet,Image} from "react-native";

export default function Footer() {
    return(
        <View style={{marginVertical: 0,backgroundColor: "#e0f7fa", borderRadius: 20}}>
           <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 10}}>
                <View>
                    <Image source={require("../assets/home.png")} style={{width: 50, height: 50, borderRadius: 20, margin: 10}}/>
                </View>
                <View>
                    <Image source={require("../assets/fav.png")} style={{width: 50, height: 50, borderRadius: 20, margin: 10}}/>
                </View>
                <View style={{marginTop: -30}}>
                    <Image source={require("../assets/location.png")} style={{width: 80, height: 80, borderRadius: 30, margin: 10}}/>
                </View>
                <View>
                    <Image source={require("../assets/cal.png")} style={{width: 50, height: 50, borderRadius: 20, margin: 10}}/>
                </View>
                <View>
                    <Image source={require("../assets/profile.png")} style={{width: 50, height: 50, borderRadius: 20, margin: 10}}/>
                </View>
           </View>
        </View>
    )
}
const styles = StyleSheet.create({

});