import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  Alert,
  ImageBackground,
} from "react-native";
import COLORS from "../consts/colors";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loader from "../../components/Looder";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { HelperText } from "react-native-paper";

import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({ email: "", password: "" });
  // const [inputs, setInputs] = React.useState({ email: "zainharoon890@gmail.com", password: "newpass1234" });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError(" Enter Email in Correct Format ", "email");

      isValid = false;
    }

    if (!inputs.password) {
      handleError("Please input password", "password");
      isValid = false;
    }

    if (isValid) {
      login();
    }
  };

  async function save(token, value) {
    const value1 = value.toString();
    await SecureStore.setItemAsync("token", token);
  }
  // async function saveBalance(token, value) {
  //   const value1 = value.toString();
  //   await SecureStore.setItemAsync("balance", token);
  // }

  async function getValueFor(token) {
    return await SecureStore.getItemAsync(token);
  }

  const login = async () => {
    console.log("no error");
    setLoading(true);
    console.log(inputs.email, inputs.password);
    axios
      .post("https://tourbook-backend.herokuapp.com/user/login", {
        email: inputs.email,
        password: inputs.password,
      })
      .then(async (res) => {
        console.log("token here");
        console.log(res.data.data.token);
        console.log(res.data.data.balance);
        await save(res.data.data.token, res.data.data);
        // await saveBalance(res.data.data.balance, res.data.data);

        console.log("token showing here");
        const token = await getValueFor("token");
        // const balance = await getValueFor("balance");

        console.log(token);
        // console.log(balance);
        console.log("token saved");

        if (res.status === 200) {
          console.log(res);

          let ress = res.data;
          console.log(ress.message);

          setLoading(false);

          console.log(res.data.data.role, "role");
          if (res.data.data.role == "tourist") {
            console.log("your status is ", res.status);
            navigation.navigate("TabNavigation");
          }
          if (res.data.data.role == "vendor") {
            console.log("your status is ", res.status);
            navigation.navigate("TabNavigation");
          }
          if (res.data.data.role == "tourguide") {
            console.log("your status is ", res.status);
            navigation.navigate("TgHomeScreen");
          }
        } else {
          console.log(res.data.message, "error msg");
          Alert.alert(errors.message);

          setTimeout(async () => {
            Alert.alert("Error", "helo");
          }, 3000);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

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
        source={require("../../assets/login6.jpg")}
      >
        <Loader visible={loading} />
        <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
          <Text
            style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}
          >
            Log In
          </Text>
          <Text
            style={{ color: COLORS.grey, fontSize: 18, marginVertical: 10 }}
          >
            Enter Your Details to Login
          </Text>
          <View style={{ marginVertical: 20 }}>
            <View style={{ marginhorizontal: 30 }}>
              <Input
                onChangeText={(text) => handleOnchange(text, "email")}
                onFocus={() => handleError(null, "email")}
                iconName="mail"
                label="Email"
                placeholder="Enter your email address"
                error={errors.email}
              />
            </View>
            <Input
              onChangeText={(text) => handleOnchange(text, "password")}
              onFocus={() => handleError(null, "password")}
              iconName="md-lock-closed"
              label="Password"
              placeholder="Enter your password"
              error={errors.password}
              password
            />

            <Text
              onPress={() => navigation.navigate("ForgetPassword")}
              style={{
                color: COLORS.black,
                fontWeight: "bold",
                textAlign: "left",
                fontSize: 16,
              }}
            >
              Forget Password
            </Text>

            <Button title="Log In" onPress={validate} />
            <Text
              onPress={() => navigation.navigate("RegisterScreen")}
              style={{
                color: COLORS.black,
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 16,
              }}
            >
              Don't have account ?Register
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;
