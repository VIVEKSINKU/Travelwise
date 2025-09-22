import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet,TextInput,Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
// import InputBox from "./InputBox";

export default function LogBox() {
    const [selectedMode, setSelectedMode] = useState("");
  return (
    <SafeAreaView>
      <View style = {styles.container}>
        <Text style = {styles.title}>LogBox Component </Text>
        <Text style = {styles.header}>
            tell us about your journey to see your impact
        </Text>
        <View style ={styles.inputitle1}>
            <Text style = {styles.text1}>Mode of transport</Text>
            <Picker
                style={styles.dropdown}
                selectedValue={selectedMode}
                onValueChange={(itemValue) => setSelectedMode(itemValue)}
            >
                <Picker.Item label="Select a mode" value="" style={styles.pickerItem} />
                <Picker.Item label="Car" value="car" />
                <Picker.Item label="Bus" value="bus" />
                <Picker.Item label="Bike" value="bike" />
                <Picker.Item label="Walking" value="walking" />
            </Picker>
        </View> 
        <View style = {styles.inputitle2}>
            <Text>Start time</Text>
            <TextInput style = {styles.input2} 
            placeholder="dd/mm/yyyy, --:--"
             placeholderTextColor="#999"
            />
        </View>
        <View style = {styles.inputitle3}>
            <Text>End time</Text>
            <TextInput style = {styles.input3} 
            placeholder="dd/mm/yyyy, --:--"
             placeholderTextColor="#999"
            />
        </View>
        <View style = {styles.inputitle4}>
            <Text>Distance</Text>
            <TextInput style = {styles.input4} 
            placeholder="eg: 5 km, 500 m etc.."
             placeholderTextColor="#999"
            />
        </View>
        <View style={{marginTop:30}}>
            <Button title="+ Log Trip" onPress={() => {}}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 2,
    width: '90%',
    alignSelf: 'center',
    padding: 16,
    marginTop: 60,
  },
    title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 12,
    },
    header: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    },
    inputitle1: {
        marginTop: 30,
        gap:20,
    },
    text1:{
        fontSize: 15,
    },
    dropdown:{
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    pickerItem: {
        color: '#999',
    },
    inputitle2: {
        marginTop: 20,
        gap:20,
    },
    input2: {
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    inputitle3: {
        marginTop: 20,
        gap:20,
    },
    input3: {
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        borderRadius: 4,
    },
    inputitle4: {
        marginTop: 20,
        gap:20,
    },
    input4: {
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        borderRadius: 4,
    },
});

      

  
