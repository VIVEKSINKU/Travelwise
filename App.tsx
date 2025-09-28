// import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogTrip from "./components/LogTrip";
import More from "./components/more/More";
import Login from './components/Login';
import Signup from './components/Signup';
// // import RecomCard from "./components/RecomCard";
// // import Category from "./components/Category";
// // import Footer from './components/Footer'
import TrackTrip from "./components/TrackTrip";
// import Achiev from "./components/Achiev";
import Cal from "./components/Cal";

// export default function App(){
//     return(
//           <SafeAreaView style={{ flex: 1 }}>
//             <Login/>
//           </SafeAreaView>
//     )
// }

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { View } from "react-native";
import LogBox from "./components/LogBox";
import {TravelMap} from "./components/map/TravelMap";
// import Welcome from "./components/Welcome";
// import Login from "./components/Login";


enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
      screenOptions={{
    headerStyle: {
      backgroundColor: "#3e636bff",
      
    },
    headerTintColor: "#fff",      
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 20,
    },
  }}
      >
        <Stack.Screen name="Home" component={LogTrip} options={{headerTransparent: true}}/>
        <Stack.Screen name="More" component={More} options={{title:"Back"}} />
        <Stack.Screen name="Cal" component={Cal} options={{title:"Calendar"}} />
        <Stack.Screen name="Add" component={LogBox} options={{title:"Log Trip"}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
        <Stack.Screen name="Track" component={TrackTrip} options={{title:"Track Trip"}} />
        {/* <Stack.Screen name="location" component={TravelMap} options={{title:"Map"}} /> */}
      </Stack.Navigator>

    </NavigationContainer>
  );
}


//LIB for navigation
//import {NavigationContainer} from '@react-navigation/native';
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import {NavigationStackScreenProps} from "@react-navigation/native-stack";
//import components 