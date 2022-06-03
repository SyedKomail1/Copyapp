import React from "react";
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
} from "react-native";
import COLORS from "../consts/colors";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
//import TourGuide from './TourGuide';
const TourguideBoard = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar translucent backgroundColor={COLORS.tranparent} />

      {/* Onboarding Image */}
      <Image
        source={require("../../assets/Tourguideboard.jpg")}
        style={style.image}
      />

      {/* Indicator container */}
      <View style={style.indicatorContainer}>
        <View style={style.indicator} />
        <View style={style.indicator} />
        <View style={[style.indicator, style.indicatorActive]} />
      </View>

      {/* Title and text container */}
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        {/* Title container */}
        <View>
          <Text style={style.title}>Hire A Tour Guide</Text>
        </View>

        {/* Text container */}
        <View style={{ margin: 15 }}>
          <Text style={style.textStyle}>Are you looking for a guide</Text>
          <Text style={style.textStyle}>You are at right place</Text>
        </View>
      </View>

      {/* Button container */}
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          paddingBottom: 40,
          paddingLeft: 10,
        }}
      >
        {/* button */}

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, color: COLORS.grey }}></Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("TourguideFind")}
              style={{
                backgroundColor: "red",
                flexDirection: "row",
                backgroundColor: COLORS.primary,
              }}
            >
              <Ionicons
                style={{ flex: 1, padding: 12, flexDirection: "row" }}
                name="location"
                color={COLORS.primary}
                size={20}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  flexDirection: "row",
                  marginRight: 30,
                  paddingBottom: 10,
                  marginTop: 10,
                  color: COLORS.white,
                }}
              >
                Search By place
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              borderColor: "#cccccc",
              marginLeft: 10,
              paddingRight: 10,
            }}
          >
            <Text style={{ fontSize: 14, color: COLORS.grey }}></Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("TourGuide")}
              style={{
                backgroundColor: "red",
                flexDirection: "row",
                backgroundColor: COLORS.primary,
              }}
            >
              <Icon
                style={{ flex: 1, padding: 12, flexDirection: "row" }}
                name="paypal"
                color={COLORS.primary}
                size={20}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  flexDirection: "row",
                  textAlign: "center",
                  marginRight: 70,
                  //marginTop: 10,
                  color: COLORS.white,
                  padding: 10,
                }}
              >
                {" "}
                View All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  image: {
    height: 320,
    width: "100%",
    borderBottomLeftRadius: 80,
  },
  iconContainer: {
    backgroundColor: "red",
    flexDirection: "row",
    backgroundColor: COLORS.primary,
  },
  indicatorContainer: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    flex: 1,

    padding: 12,
    flexDirection: "row",
  },
  indicator: {
    height: 3,
    width: 30,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },
  iconContainer: {
    backgroundColor: "red",
    flexDirection: "row",
    backgroundColor: COLORS.primary,
  },
  btn: {
    height: 60,
    marginHorizontal: 20,
    backgroundColor: "black",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 32, fontWeight: "bold" },
  textStyle: { fontSize: 16, color: COLORS.grey },
});
export default TourguideBoard;
