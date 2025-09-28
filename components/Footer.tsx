import React from "react";
import {View,StyleSheet,Image,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Footer() {
    const navigation = useNavigation<any>();
    return(
        <View style={{marginVertical: 0,backgroundColor: "#e0f7fa", borderRadius: 20}}>
           <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 10}}>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image source={require("../assets/home.png")} style={{width: 50, height: 50, borderRadius: 20, margin: 10}}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Add")}>
                        <Image source={require("../assets/plus.png")} style={{width: 50, height: 50, borderRadius: 20, margin: 10}}/>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: -30}}>
                    <TouchableOpacity onPress={() => navigation.navigate("location")}>
                        <Image source={require("../assets/location.png")} style={{width: 80, height: 80, borderRadius: 30, margin: 10}}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Cal")}>
                        <Image source={require("../assets/cal.png")} style={{width: 50, height: 50, borderRadius: 20, margin: 10}}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                        <Image source={require("../assets/profile.png")} style={{width: 50, height: 50, borderRadius: 20, margin: 10}}/>
                    </TouchableOpacity>
                </View>
           </View>
        </View>
    )
}
const styles = StyleSheet.create({

});