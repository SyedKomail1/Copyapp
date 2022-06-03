import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import Homee from "./screens/Homee";
import Homeeg from "./screens/Homeeg";
import Homeeh from "./screens/Homeeh";

const fullScreenWidth = Dimensions.get("window").width;
const Stack = createStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homee"
        component={Homee}
        options={{
          headerShown: true,
          title: <Header />,
          headerStyle: {
            backgroundColor: COLORS.secondary,
            borderWidth: 0,
            width: "100%",
            height: 100,
          },
          styles: {
            width: "100%",
            height: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function HomeegStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homeeg"
        component={Homeeg}
        options={{
          headerShown: true,
          title: <Header />,
          headerStyle: {
            backgroundColor: COLORS.secondary,
            borderWidth: 0,
            width: "100%",
            height: 100,
          },
          styles: {
            width: "100%",
            height: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}

function HomeehStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Homeeh"
        component={Homeeh}
        options={{
          headerShown: true,
          title: <Header />,
          headerStyle: {
            backgroundColor: COLORS.secondary,
            borderWidth: 0,
            width: "100%",
            height: 100,
          },
          styles: {
            width: "100%",
            height: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function Navigation(props) {
  return (
    <NavigationContainer>
      <TabNavigator>

      screenOptions={({route}=>({

headerTitle:()=> <Text> Header</Text>
TabBarIcon: ({focused, color, size, padding}) =>{
let iconName;
if (route.name==='Homee'){
	iconName=focused? 'home': 'home-outline';

}	else if (route.name ==='About'){

	iconName=focused

	? 'information-circle'
: 'information-circle-outline';
}  else if (route.name ==='Profile'){

	iconName= focused ? 'person'  : 'person-outline';
}

return (

<Ionicons
name={iconName}
size={size}
color{...color}
style={{paddingBottom: padding}} />

);
},

})}


        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Homeeg" component={HomeegStackScreen} />
        <Tab.Screen name="Homeeh" component={HomeehStackScreen} />
      </TabNavigator>
    </NavigationContainer>
  );
}
