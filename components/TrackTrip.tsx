import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet,ScrollView,Image} from "react-native";
import Achiev from "./Achiev";

export default function TrackTrip() {
    return(
        <SafeAreaView style={{backgroundColor: "#a3e4fbff", flex: 1}}>
            <ScrollView>
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
            <ScrollView>
                <View style = {styles.container2}>
                    <Text style={{marginLeft:27, fontSize: 20, fontWeight: "bold"}}>Recent Trips</Text>
                    <Text style={{marginLeft:27}}>Log your journey</Text>
                    <View style={{alignItems:"center", justifyContent:"center",marginTop:50}}>
                        <Image
                            source ={require("../assets/steps.jpg")}
                            style = {{width:90, height:80,  marginTop:20, borderRadius:50}}
                        />
                        <Text style={{textAlign:"center", fontSize:16, marginTop:20, marginBottom:20,color:"gray"}}>No recent trips logged</Text>
                    </View>
                </View>
            </ScrollView>
            <View style = {styles.container3}>
                <View style={{margin:15, gap:10,flexDirection:"row"}}>
                    <Image source={require('../assets/achievement/trophy.png')} 
                        style = {{width:30, height:40}}
                    />
                    <Text style={{fontSize: 20, fontWeight: "bold"}}>Your Achievements</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <View style ={styles.boxLower}>
                        <Text style={{fontSize: 16, fontWeight: "bold"}}>Streak</Text>
                    </View>
                    <Achiev/>
                </ScrollView>
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
        height: 120,
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
    container2:{
        marginHorizontal:20,
       backgroundColor:"#e6e8eaff",
       borderRadius:7,
        padding:10,
        height:500,
    },
    container3:{
        marginTop: 20,
        marginHorizontal: 20,
        marginVertical: 20,
        gap: 10,
        backgroundColor:"#e6e8eaff",
        height:190,
        width:370,
        borderRadius:7,
    },
    boxLower: {
        backgroundColor: "white",
        height: 100,
        width: 100,
        marginLeft:20,
        borderRadius: 50,
        alignItems:"center",
        justifyContent:"center",
        elevation: 3,
    }
})