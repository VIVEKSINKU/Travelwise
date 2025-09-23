import React from "react";
import {View, Text, StyleSheet,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function More() {
    return(
        <SafeAreaView style={{flex:1,backgroundColor:"#a3e4fbff"}}>
            <View style = {{marginTop:50,justifyContent:"center",alignItems:"center",backgroundColor:"white",height:50}}>
                <Text>Search BAR</Text>
            </View>
            <View style = {{marginTop:20}}>
                <Text style={{padding: 10, fontSize: 18, fontWeight: "bold"}}>Best Places In Kerala</Text>
            </View>
            <View>
                <View style = {styles.card1}>
                    <Image source={require("../../assets/KBoat.jpg")} style={styles.cardImage} />
                    <Image source={require("../../assets/favnotfill.png")} style = {styles.favIcon}/>
                </View>
                <View style = {styles.card1}>
                    <Image source={require("../../assets/KBoat.jpg")} style={styles.cardImage} />
                    <Image source={require("../../assets/favnotfill.png")} style = {styles.favIcon}/>
                </View>
                
            </View>
                
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    card1: {
    marginTop: 20,
    marginLeft: 20,
    width: "50%",
    borderRadius: 20,
    backgroundColor: "white",
    overflow: "hidden", 
    elevation: 5, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  favIcon: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 10,
    right: 10,
    borderRadius: 15,
  }

});