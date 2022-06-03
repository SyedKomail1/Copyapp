import * as React from 'react';
import {Component} from 'react';
import {View, Text, SafeAreaView,Image, StyleSheet, Button, ScrollView, Dimensions} from "react-native";
import { styles } from "../styles/styles";
import Input from "../src/Input";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const {width, height} = Dimensions.get ("screen");

import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import ImageButton from "../src/ImageButton";
import MainScreen from "../src/MainScreen";






export default class regfront extends Component({  }){

render(){

  return(
    <ScrollView>
    
        <View >
          <Text style = {styles.headerText} > Reg Front
            </Text>
        </View>

    
      <View style={styles.container}>
  
      <View>
<Text style= {styles.baseTextL}> Book a Trip </Text>
       </View>
       <View style={styles.Icon}>
       <Ionicons name="bed" size={50} color="black" style={{
            padding: 20,
        }}  />


       <MaterialIcons name="flight" size={50} color="black" style={{
            padding: 20,
        }}/>
       <Ionicons name="ios-person" size={50} color="black" style={{
            padding: 20,
        }}/>
       </View>
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      
    </View>
      <StatusBar style="auto" />
    </View>
    
          </ScrollView>

        
          

  )
}
}
