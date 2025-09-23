import React,{useState} from "react";
import {View,Text, StyleSheet,Image, TextInput,FlatList,TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {PlaceData} from "../travelCards/PlaceData"

export default function More() {
    const [search, setSearch] = useState("");
    const filteredPlaces = PlaceData.filter((place) =>
        place.name.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <SafeAreaView style={{flex:1,backgroundColor:"#a3e4fbff"}}>
            <TextInput
                style ={styles.searchBar}
                placeholder="search places.."
                placeholderTextColor="black"
                value={search}
                onChangeText={(text) =>setSearch(text)}
            />
            <FlatList
                data ={filteredPlaces}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                ListHeaderComponent = {
                    <>
                        <View style={styles.header}>
                            <Text style={{fontSize:19,fontWeight:"bold"}}>
                                Best Places to Visit in Kerala
                            </Text>
                        </View>
                    </>
                }
                renderItem={({item}) =>(
                    <TouchableOpacity style ={styles.card}>
                        <Image source={item.image} style = {styles.cardImg}/>
                        <Text style = {styles.cardTitle} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
                    </TouchableOpacity>
                )}
                style={{marginTop:10}}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    searchBar: {
        marginTop: 50,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "white",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        paddingHorizontal: 10,
        height: 40,
    },
   card: {
    backgroundColor: "white",
    borderRadius: 15,
    marginBottom: 15,
    marginRight: 20,
    marginLeft: 20,
    flex: 1,
    overflow: "hidden",
    elevation: 3, 
  },
  cardImg: {
    width: "100%",
    height: 180,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
  },
    header:{
        marginTop:20,
        marginBottom:18,
        marginLeft:20,
    },
});