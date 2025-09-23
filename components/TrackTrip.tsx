import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet,ScrollView,Image} from "react-native";

export default function TrackTrip() {
    return(
        <SafeAreaView style={{backgroundColor: "#a3e4fbff", flex: 1}}>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style = {styles.container1}>
                    <View style ={styles.boxHeader}>
                       <Image source={require('../assets/distance1.png')} 
                            style = {styles.img}
                       />
                        <View style = {styles.text1}>
                            <Text style = {{fontSize: 16,color:"gray"}}>Total Distance</Text>
                            <Text style = {{fontSize: 24}}>0.0 KM</Text> {/*data from user */}
                        </View>
                    </View>
                    <View style ={styles.boxHeader}>
                        <Image
                            source ={require("../assets/timer.png")}
                            style = {styles.img}
                        />
                        <View style = {styles.text1}>
                            <Text style = {{fontSize: 16,color:"gray"}}>Total Time</Text>
                            <Text style = {{fontSize: 24}}>0.0 HRS</Text> {/*calulate from start time and end time */}
                        </View>
                    </View>
                    <View style ={styles.boxHeader}>
                        <Image
                            source ={require("../assets/destination1.png")}
                            style = {styles.img}
                        />
                        <View style = {styles.text1}>
                            <Text style = {{fontSize: 16,color:"gray"}}>current destination</Text>
                            <Text style = {{fontSize: 24}}>xyz</Text> {/*data from user */}
                        </View>
                    </View>
                </View>
           </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container1: {
        marginTop: 40,
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
    boxHeader: {
        backgroundColor: "white",
        height: 100,
        width: 250,
        borderRadius: 10,
        flexDirection:"row"
    },
    img:{
        width:80,
        height:80,
        marginTop:10,
        borderRadius:50
    },
    text1:{
        margin:15,
        gap:10
    },
})