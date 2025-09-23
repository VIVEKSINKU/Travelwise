// import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import LogBox from "./components/LogBox";
// import LogTrip from "./components/LogTrip";
// import More from "./components/more/More";
// import Login from './components/Login';
import Signup from './components/Signup';
// // import RecomCard from "./components/RecomCard";
// // import Category from "./components/Category";
// // import Footer from './components/Footer'

export default function App(){
    return(
          <SafeAreaView style={{ flex: 1 }}>
            <Signup/>
          </SafeAreaView>
    )
}
// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { enableScreens } from "react-native-screens";
// import { View } from "react-native";
// import Welcome from "./components/Welcome";
// import Login from "./components/Login";


// enableScreens();

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home"
//       screenOptions={{
//     headerStyle: {
//       backgroundColor: "#3e636bff",
      
//     },
//     headerTintColor: "#fff",      
//     headerTitleStyle: {
//       fontWeight: "bold",
//       fontSize: 20,
//     },
//   }}
//       >
//         <Stack.Screen name="Home" component={Welcome} options={{headerTransparent: true}}/>
//         <Stack.Screen name="More" component={Login} options={{title:"Back"}} />
//       </Stack.Navigator>

//     </NavigationContainer>
//   );
// }
