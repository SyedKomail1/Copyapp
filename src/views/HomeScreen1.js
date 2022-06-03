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
import { MaterialIcons } from "@expo/vector-icons";

import COLORS from "../consts/colors";
import places from "../consts/places";
import cars from "../consts/cars";
import TopToursScreen from "./TopToursScreen.js";
import TopTours from "./TopTours.js";
import TopTours1 from "./TopTours1.js";
import TopTours2 from "./TopTours2.js";
import Category from "./Category.js";
import Category1 from "./Category1.js";
import Category2 from "./Category2.js";
import Category3 from "./Category3.js";
import Category4 from "./Category4.js";

import Button from "../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("screen");
const HomeScreen1 = ({ navigation }) => {
  const categoryIcons = [
    <MaterialIcons
      name="tour"
      size={35}
      color={COLORS.primary}
      onPress={() => navigation.navigate("TopToursScreen")}
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

  const Card = ({ place }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreen", place)}
      >
        <ImageBackground style={style.cardImage} source={place.image}>
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

  const Card3 = ({ place }) => {
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
        <Text>Balance 5000 </Text>
      </View>

      <View style={style.header1}>
        <View style={{ marginLeft: 345 }}>
          <Ionicons name="notifications" size={28} color={COLORS.white} />
        </View>
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
            <Text style={style.headerTitle}>Discover the</Text>
            <Text style={style.headerTitle}>Pakistan</Text>
            <View style={style.inputContainer}>
              <Ionicons name="search" size={28} />
              <TextInput
                placeholder="Search place"
                style={{ color: COLORS.grey }}
              />
            </View>
          </View>
        </View>
        <ListCategories />

        <Text
          style={{
            fontWeight: "bold",
            color: COLORS.black,
            fontWeight: "bold",
            fontSize: 20,
            margin: 20,
          }}
        >
          Categories
        </Text>

        <Category />
        <TouchableOpacity
          onPress={() => navigation.navigate("TopToursScreen1")}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 30,

              marginBottom: 30,
            }}
          >
            Book a Tour
          </Text>
        </TouchableOpacity>

        <Category1 />
        <TouchableOpacity onPress={() => navigation.navigate("TourguideBoard")}>
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 30,

              marginBottom: 30,
            }}
          >
            Hire a Tour Guide
          </Text>
        </TouchableOpacity>
        <Category2 />
        <TouchableOpacity
          onPress={() => navigation.navigate("Caronboardscreen")}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 30,

              marginBottom: 30,
            }}
          >
            Rent a Vehicle
          </Text>
        </TouchableOpacity>
        <Category3 />
        <TouchableOpacity
          onPress={() => navigation.navigate("BudgetEstimateBoard")}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 30,

              marginBottom: 30,
            }}
          >
            Estimate Your Budget
          </Text>
        </TouchableOpacity>
        <Category4 />

        <TouchableOpacity onPress={() => navigation.navigate("TourPlanner")}>
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.primary,
              fontWeight: "bold",
              fontSize: 20,
              marginLeft: 30,

              marginBottom: 30,
            }}
          >
            Get your Tour Planned
          </Text>
        </TouchableOpacity>

        <View>
          <ScrollView></ScrollView>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.black,
              fontWeight: "bold",
              fontSize: 20,
            }}
            onPress={() => navigation.navigate("TopToursScreen")}
          >
            Top Tours
          </Text>

          <View style={style.container}>
            <TouchableOpacity
              onPress={() => navigation.navigate("TopToursScreen")}
            >
              <Text style={style.textPart2}>Show All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={places}
          renderItem={({ item }) => <Card place={item} />}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: COLORS.black,
              fontWeight: "bold",
              fontSize: 20,
            }}
            onPress={() => navigation.navigate("TopToursScreen")}
          >
            Best Featured
          </Text>

          <View style={style.container}>
            <TouchableOpacity
              onPress={() => navigation.navigate("TopToursScreen")}
            >
              <Text style={style.textPart2}>Show All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={places}
          renderItem={({ item }) => <Card3 place={item} />}
        />

        <Button
          title="Purchasecredit"
          onPress={() => navigation.navigate("Purchasecredit")}
        />
        <Button title="About" onPress={() => navigation.navigate("About")} />

        <Button title="Review" onPress={() => navigation.navigate("Review")} />

        <Button
          title="AgencyHomeScreen"
          onPress={() => navigation.navigate("AgencyHomeScreen")}
        />

        <Button
          title="TgHomeScreen"
          onPress={() => navigation.navigate("TgHomeScreen")}
        />
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

  header1: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.primary,
  },

  headerTitle: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 28,
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
export default HomeScreen1;
