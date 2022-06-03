import React from "react";
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
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { Fontisto } from "@expo/vector-icons";

import COLORS from "../consts/colors";
import places from "../consts/places";
import cars from "../consts/cars";
import TopToursScreen from "./TopToursScreen.js";
import TopTours from "./TopTours.js";
import TopTours1 from "./TopTours1.js";
import TopTours2 from "./TopTours2.js";
import Category1 from "./Category1.js";
import Category2 from "./Category2.js";
import Category3 from "./Category3.js";
import Category4 from "./Category4.js";

import Button from "../../components/Button";

const { width } = Dimensions.get("screen");
const TgHomeScreen = ({ navigation }) => {
  const categoryIcons = [
    <Ionicons
      name="home"
      size={25}
      color={COLORS.primary}
      onPress={() => navigation.navigate("OnBoardScreen")}
    />,
    <Fontisto
      name="persons"
      size={25}
      color={COLORS.primary}
      onPress={() => navigation.navigate("TourguideBoard")}
    />,
    <Ionicons
      name="car"
      size={35}
      color={COLORS.primary}
      onPress={() => navigation.navigate("Caronboardscreen")}
    />,

    <FontAwesome5
      name="money-check-alt"
      size={25}
      color={COLORS.primary}
      onPress={() => navigation.navigate("BudgetEstimateBoard")}
    />,
    <Ionicons
      name="md-airplane"
      size={35}
      color={COLORS.primary}
      onPress={() => navigation.navigate("TourPlannerBoard")}
    />,
  ];

  const ListCategories = () => {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={style.categoryContainer}>
          {categoryIcons.map((icon, index) => (
            <View key={index} style={style.iconContainer}>
              {icon}
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

  const Card1 = ({ place }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreen", place)}
      >
        <ImageBackground style={style.cardImage1} source={place.image}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {place.name}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location" size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>
                {place.location}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="star" size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>5.0</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const RecommendedCard = ({ place }) => {
    return (
      <ImageBackground style={style.rmCardImage} source={place.image}>
        <Text
          style={{
            color: COLORS.white,
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {place.name}
        </Text>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <View style={{ width: "100%", flexDirection: "row", marginTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location" size={22} color={COLORS.white} />
              <Text style={{ color: COLORS.white, marginLeft: 5 }}>
                {place.location}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginLeft: 10 }}>
                <Ionicons name="star" size={22} color={COLORS.white} />
              </View>
              <Text style={{ color: COLORS.white, marginLeft: 5 }}>5.0</Text>
            </View>
          </View>
          <Text style={{ color: COLORS.white, fontSize: 13 }}>
            {place.details}
          </Text>
        </View>
      </ImageBackground>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <Ionicons
          name="person"
          size={28}
          color={COLORS.white}
          onPress={() => navigation.navigate("Userprofile")}
        />

        <Ionicons name="notifications" size={28} color={COLORS.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 20,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={style.headerTitle}>Welcome</Text>
            <Text style={style.headerTitle}>Tour Guide Name</Text>
            <View style={style.inputContainer}>
              <Ionicons name="search" size={28} />
              <TextInput
                placeholder="Search place"
                style={{ color: COLORS.grey }}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 50,
          }}
        >
          {/* <Button
            title="Create Tour"
            onPress={() => navigation.navigate("CreateTour")}
          /> */}
        </View>

        <Text style={style.headerTitle1}>Order Requests </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 23,
  },
  headerTitle1: {
    color: COLORS.black,
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 23,
  },
  textPart2: {
    color: COLORS.grey,

    fontSize: 16,
    // textDecorationLine: 'underline',
  },
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,

    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    height: 60,
    width: 60,
    marginRight: 18,
    backgroundColor: COLORS.secondary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  cardImage: {
    height: 320,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  cardImage1: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
});
export default TgHomeScreen;
