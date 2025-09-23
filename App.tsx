import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
// import LogBox from "./components/LogBox";
// import LogTrip from "./components/LogTrip";
import More from "./components/more/More";
// import Login from './components/Login';
// // import RecomCard from "./components/RecomCard";
// // import Category from "./components/Category";
// // import Footer from './components/Footer'

export default function App(){
    return(
          <SafeAreaView>
            <More/>
          </SafeAreaView>
    )
}
// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { enableScreens } from "react-native-screens";
// import { View } from "react-native";


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
//         <Stack.Screen name="Home" component={LogTrip} options={{headerTransparent: true}}/>
//         <Stack.Screen name="More" component={More} options={{title:"Back"}} />
//       </Stack.Navigator>

//     </NavigationContainer>
//   );
// }
