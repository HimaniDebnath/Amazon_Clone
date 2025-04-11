import "react-native-gesture-handler"; // This must be at the top
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";



const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={()=>({
           headerShown:false
        })}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ProductScreen" component={ProductScreen}/>
          
        </Stack.Navigator>
       
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
