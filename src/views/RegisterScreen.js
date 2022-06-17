import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import axios from "axios";

import COLORS from "../consts/colors";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loader from "../../components/Looder";
import { Picker } from "@react-native-picker/picker";

const RegisterScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    email: "",
    fname: "",
    lname: "",
    phoneNumber: "",
    role: "",
    cnic: "",
    password: "",
    city: "",
    country: "",
    gender: "",
  });
  inputs.city = "626e2a64c65f4c055b64364d";

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError(" Enter Email in Correct Format ", "email");

      isValid = false;
    }

    if (!inputs.fname) {
      handleError("Please input firstname", "fname");
      isValid = false;
    }

    if (!inputs.lname) {
      handleError("Please input lastname", "lname");
      isValid = false;
    }

    if (!inputs.city) {
      handleError("Please input city", "city");
      isValid = false;
    }

    if (!inputs.country) {
      handleError("Please input country", "country");
      isValid = false;
    }

    if (!inputs.role) {
      handleError("Please input role", "role");
      isValid = false;
    }

    if (!inputs.gender) {
      handleError("Please input gender", "gender");

      isValid = false;
    }

    if (!inputs.phoneNumber) {
      handleError("Please input phone number", "phoneNumber");
      isValid = false;
    } else if (inputs.phoneNumber.length < 11) {
      handleError("Phone Number lenght is less than 11", "phoneNumber");
    }
    isValid = false;

    if (!inputs.cnic) {
      handleError("Please input cnic", "cnic");
    } else if (inputs.cnic.length < 13) {
      handleError("Cnic should be 13 digit", "cnic");
    }
    isValid = false;

    isValid = false;

    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError("Min password length of 5", "password");
      isValid = false;
    }
    console.log("\n called axios1\n");

    if (isValid) {
      console.log("\n called axios2\n");

      addData();
    }
  };
  const addData = async (e) => {
    console.log("\n called axios\n");
    console.log(setInputs);
    console.log(inputs);

    axios
      .post("https://tourbook-backend.herokuapp.com/user/signup", inputs)
      .then((responce) => {
        if (responce.status === 200) {
          let res = responce.data;
          if (res.message) {
            console.log(res.message);
          } else {
            console.log(inputs);
            console.log("User Added Successfully!");
            register();
            setInputs(inputs);
          }
        }
      });
    console.log("Done axios");
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem("userData", JSON.stringify(inputs));
        navigation.navigate("LoginScreen");
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    }, 3000);
  };

  const [selectedLanguage, setSelectedLanguage] = useState();

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <ImageBackground
        style={{ flex: 1 }}
        source={require("../../assets/register.jpg")}
      >
        <Loader visible={loading} />
        <ScrollView
          contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
        >
          <Text
            style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}
          >
            Register
          </Text>
          <Text
            style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}
          >
            Enter Your Details to Register
          </Text>
          <View style={{ marginVertical: 20 }}>
            <Input
              onChangeText={(text) => handleOnchange(text, "email")}
              onFocus={() => handleError(null, "email")}
              Name="email-outline"
              label="Email"
              placeholder="Enter your email address"
              error={errors.email}
            />

            <Input
              onChangeText={(text) => handleOnchange(text, "fname")}
              onFocus={() => handleError(null, "fname")}
              Name="account-outline"
              label="First Name"
              placeholder="Enter your firstname"
              error={errors.fname}
            />

            <Input
              onChangeText={(text) => handleOnchange(text, "lname")}
              onFocus={() => handleError(null, "lname")}
              Name="account-outline"
              label="Last Name"
              placeholder="Enter your lastname"
              error={errors.lname}
            />

            <Input
              onChangeText={(text) => handleOnchange(text, "gender")}
              onFocus={() => handleError(null, "gender")}
              //Name="account-outline"
              label="Gender"
              placeholder="Enter your Gender"
              error={errors.gender}
            />

            <Input
              onChangeText={(text) => handleOnchange(text, "city")}
              onFocus={() => handleError(null, "city")}
              //Name="account-outline"
              label="city"
              placeholder="Enter the city"
              error={errors.city}
            />

            <Input
              onChangeText={(text) => handleOnchange(text, "country")}
              onFocus={() => handleError(null, "country")}
              //Name="account-outline"
              label="country"
              placeholder="Enter your country"
              error={errors.country}
            />

            <Input
              keyboardType="numeric"
              onChangeText={(text) => handleOnchange(text, "cnic")}
              maxLength={13}
              onFocus={() => handleError(null, "cnic")}
              Name="phone-outline"
              label="CNIC"
              placeholder="Enter your cnic"
              error={errors.cnic}
            />

            <Input
              keyboardType="numeric"
              minLength={11}
              maxLength={11}
              onChangeText={(text) => handleOnchange(text, "phoneNumber")}
              onFocus={() => handleError(null, "phoneNumber")}
              Name="phone-outline"
              label="Phone Number"
              placeholder="Enter your phone no"
              error={errors.phoneNumber}
            />
            <Input
              onChangeText={(text) => handleOnchange(text, "password")}
              onFocus={() => handleError(null, "password")}
              Name="lock-outline"
              label="Password"
              placeholder="Enter your password"
              error={errors.password}
              password
            />

            <Input
              onChangeText={(text) => handleOnchange(text, "role")}
              onFocus={() => handleError(null, "role")}
              Name="account-outline"
              label="Role"
              placeholder="tourist,vendor"
              error={errors.role}
            />

            {/* <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
    
                }
              >
                <Picker.Item label="Tourist " value="java" />
                <Picker.Item label="Agency" value="js" />
                <Picker.Item label="Tour Guide" value="js" />
              </Picker>
            </View>
          </View> */}

            <Button title="Register" onPress={validate} />
            <Text
              onPress={() => navigation.navigate("LoginScreen")}
              style={{
                color: COLORS.black,
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 16,
              }}
            >
              Already have account ?Login
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default RegisterScreen;
