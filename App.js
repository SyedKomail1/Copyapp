import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from "react-native-flash-message";

//import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigation from "./src/views/TabNavigation";

import OnBoardScreen from "./src/views/OnBoardScreen";
import Started from "./src/views/Started.js";

import CartScreen from "./src/views/CartScreen.js";

// //import Tripbooking from "./components/Tripbooking";
import HomeScreen from "./src/views/HomeScreen";
// import DetailsScreen from "./src/views/DetailsScreen";
import LoginScreen from "./src/views/LoginScreen.js";
import RegisterScreen from "./src/views/RegisterScreen";
import ForgetPassword from "./src/views/ForgetPassword";
import ForgetCode from "./src/views/ForgetCode";
import NewPass from "./src/views/NewPass";
// import CreateTour from "./src/views/CreateTour";
import Userprofile from "./src/views/Userprofile";
import Contact from "./src/views/Contact";
import About from "./src/views/About";
import Shared from "./components/Shared";
// import HomeScreen1 from "./src/views/HomeScreen1";
import TopToursScreen1 from "./src/views/TopToursScreen1";
import Caronboardscreen from "./src/views/Caronboardscreen";
import CarHomeScreen from "./src/views/CarHomeScreen";
import CarDetailsScreen from "./src/views/CarDetailsScreen";
import Booking from "./src/views/Booking";
import TourGuide from "./src/views/TourGuide";
import TourGuideDetails from "./src/views/TourGuideDetails";
import TourguideBoard from "./src/views/TourguideBoard";
import TourguideFind from "./src/views/TourguideFind";
import BudgetEstimate from "./src/views/BudgetEstimate";
import TourPlanner from "./src/views/TourPlanner";

import TopToursScreen from "./src/views/TopToursScreen";
// import TopTours from "./src/views/TopTours";
// import TopTours1 from "./src/views/TopTours1";
// import TopTours2 from "./src/views/TopTours2";
import BudgetEstimateBoard from "./src/views/BudgetEstimateBoard";
import TourPlannerBoard from "./src/views/TourPlannerBoard";
// import Category1 from "./src/views/Category1";
// import Category2 from "./src/views/Category2";
// import Category3 from "./src/views/Category3";
// import Category4 from "./src/views/Category4";

import Review from "./src/views/Review";
// import Tourplannedpage from "./src/views/Tourplannedpage";

import Purchasecredit from "./src/views/Purchasecredit";

import PassresetSuccess from "./src/views/PassresetSuccess";

import AgencyHomeScreen from "./src/views/AgencyHomeScreen";
import TgHomeScreen from "./src/views/TgHomeScreen";

// import LoginScreen1 from "./src/views/LoginScreen1.js";
//import CarHomeScreen2 from "./src/views/CarHomeScreen2.js";
import DetailsScreen1 from "./src/views/DetailsScreen1.js";
// import Map from "./src/views/Map.js";

//Screens
import ChooseLocation from "./src/Screens/ChooseLocation";
import Home from "./src/Screens/Home";

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="home" component={Home} />

        <Stack.Screen name="chooseLocation" component={ChooseLocation} />
        <Stack.Screen
          name="Started"
          component={Started}
          options={{ title: "Started" }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: "LoginScreen" }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          // options={{ title: "RegisterScreen" }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ title: "CartScreen" }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{ title: "ForgetPassword" }}
        />
        <Stack.Screen
          name="NewPass"
          component={NewPass}
          options={{ title: "NewPass" }}
        />
        <Stack.Screen
          name="ForgetCode"
          component={ForgetCode}
          options={{ title: "ForgetCode" }}
        />

        <Stack.Screen
          name="TourPlanner"
          component={TourPlanner}
          options={{ title: "TourPlanner" }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Home Screen" }}
        />
        <Stack.Screen
          name="TopToursScreen1"
          component={TopToursScreen1}
          options={{ title: "TopToursScreen1" }}
        />

        <Stack.Screen
          name="DetailsScreen1"
          component={DetailsScreen1}
          options={{ title: "DetailsScreen1" }}
        />

        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{ title: "Booking" }}
        />
        <Stack.Screen
          name="Purchasecredit"
          component={Purchasecredit}
          options={{ title: "Purchasecredit" }}
        />

        <Stack.Screen name="TabNavigation" component={TabNavigation} />

        <Stack.Screen
          name="Userprofile"
          component={Userprofile}
          options={{ title: "Userprofile" }}
        />
        <Stack.Screen
          name="Shared"
          component={Shared}
          options={{ title: "Shared" }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ title: "Contact" }}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "About" }}
        />

        <Stack.Screen
          name="Review"
          component={Review}
          options={{ title: "Review" }}
        />
        <Stack.Screen
          name="TgHomeScreen"
          component={TgHomeScreen}
          options={{ title: "TgHomeScreen" }}
        />
        <Stack.Screen
          name="AgencyHomeScreen"
          component={AgencyHomeScreen}
          options={{ title: "AgencyHomeScreen" }}
        />

        <Stack.Screen
          name="TopToursScreen"
          component={TopToursScreen}
          options={{ title: "TopToursScreen" }}
        />

        <Stack.Screen
          name="TourguideBoard"
          component={TourguideBoard}
          options={{ title: "TourguideBoard" }}
        />
        <Stack.Screen
          name="TourguideFind"
          component={TourguideFind}
          options={{ title: "TourguideFind" }}
        />
        <Stack.Screen
          name="TourGuide"
          component={TourGuide}
          options={{ title: "TourGuide" }}
        />
        <Stack.Screen
          name="TourGuideDetails"
          component={TourGuideDetails}
          options={{ title: "TourGuideDetails" }}
        />

        <Stack.Screen
          name="Caronboardscreen"
          component={Caronboardscreen}
          options={{ title: "Caronboardscreen" }}
        />
        <Stack.Screen
          name="PassresetSuccess"
          component={PassresetSuccess}
          options={{ title: "PassresetSuccess" }}
        />
        <Stack.Screen
          name="CarHomeScreen"
          component={CarHomeScreen}
          options={{ title: "CarHomeScreen" }}
        />
        <Stack.Screen
          name="CarDetailsScreen"
          component={CarDetailsScreen}
          options={{ title: "CarDetailsScreen" }}
        />

        <Stack.Screen
          name="BudgetEstimateBoard"
          component={BudgetEstimateBoard}
          options={{ title: "BudgetEstimateBoard" }}
        />
        <Stack.Screen
          name="BudgetEstimate"
          component={BudgetEstimate}
          options={{ title: "BudgetEstimate" }}
        />

        {/* 
        <Stack.Screen
          name="CarHomeScreen2"
          component={CarHomeScreen2}
          options={{ title: "CarHomeScreen2" }}
        />

        <Stack.Screen
          name="HomeScreen1"
          component={HomeScreen1}
          options={{ title: "HomeScreen1" }}
        />

        <Stack.Screen name="Map" component={Map} options={{ title: "Map" }} />

        
        <Stack.Screen
          name="LoginScreen1"
          component={LoginScreen1}
          options={{ title: "LoginScreen1" }}
        />



       
        
      
        
      

       

      
       
        <Stack.Screen
          name="TourPlannerBoard"
          component={TourPlannerBoard}
          options={{ title: "TourPlannerBoard" }}
        />
        
       
        <Stack.Screen
          name="TopTours"
          component={TopTours}
          options={{ title: "TopTours" }}
        />
       
        <Stack.Screen
          name="TopTours1"
          component={TopTours1}
          options={{ title: "TopTours1" }}
        />
        <Stack.Screen
          name="TopTours2"
          component={TopTours2}
          options={{ title: "TopTours2" }}
        />
        <Stack.Screen
          name="Category1"
          component={Category1}
          options={{ title: "Category1" }}
        />
        <Stack.Screen
          name="Category2"
          component={Category2}
          options={{ title: "Category2" }}
        />
       
        <Stack.Screen
          name="Category3"
          component={Category3}
          options={{ title: "Category3" }}
        />
        <Stack.Screen
          name="Tourplannedpage"
          component={Tourplannedpage}
          options={{ title: "Tourplannedpage" }}
        />
        <Stack.Screen
          name="Category4"
          component={Category4}
          options={{ title: "Category4" }}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ title: "DetailsScreen" }}
        />
       
        <Stack.Screen
          name="CreateTour"
          component={CreateTour}
          options={{ title: "CreateTour" }}
        />
        
       
        */}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
