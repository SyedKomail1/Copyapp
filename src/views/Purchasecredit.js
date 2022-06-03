import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import COLORS from "../consts/colors";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loader from "../../components/Looder";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";

const Purchasecredit = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({
    CardNumber: "",
    Month: "",
    Year: "",
    CVC: "",
    Amount: "",
    email: "",
    name: "",
  });

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.name) {
      handleError("Please Fill the Field", "name");
      isValid = false;
    }

    if (!inputs.email) {
      handleError("Please Fill the email", "email");
      isValid = false;
    }

    if (!inputs.CardNumber) {
      handleError("Please Fill the CardNumber", "CardNumber");
      isValid = false;
    }

    if (!inputs.Month) {
      handleError("Please Fill the Month", "Month");
      isValid = false;
    }

    if (!inputs.Year) {
      handleError("Please Fill the Year", "Year");
      isValid = false;
    }

    if (!inputs.CVC) {
      handleError("Please Fill the CVC", "CVC");
      isValid = false;
    }

    if (!inputs.Amount) {
      handleError("Please Fill the Amount", "Amount");
      isValid = false;
    }
    if (isValid) {
      addData();
    }
  };

  async function save(token, value) {
    await SecureStore.setItemAsync(token, value);
  }

  async function getValueFor(token) {
    let result = await SecureStore.getItemAsync(token);
    return result;
  }

  const addData = async (e) => {
    const cvc = inputs.CVC;
    const balance = Number(inputs.Amount);
    const year = inputs.Year;
    const cn = Number(inputs.CardNumber);
    const month = inputs.Month;
    const myemail = inputs.email;
    const myname = inputs.name;
    console.log("\n called axios\n");
    console.log(inputs);
    //console.log(await AsyncStorage.getItem("accessToken"));

    // const data = {
    //   payment: {
    //     CardNumber: cn,
    //     Month: month,
    //     Year: year,
    //     CVC: cv,
    //     Amount: balance,
    //   },
    //   user: {
    //     email: myemail,
    //     name: myname,
    //   },
    // };

    console.log("\n show data \n");
    const token = await getValueFor("token");
    console.log(console.log(token));
    axios
      .post(
        "http://tourbook-backend.herokuapp.com/transaction/buy",
        {
          payment: {
            CardNumber: cn,
            Month: month,
            Year: year,
            CVC: cvc,
            Amount: balance,
          },
          user: {
            email: myemail,
            name: myname,
          },
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((responce) => {
        console.log(responce);
        save("balance", res.data.balance);
      })
      .catch((err) => console.log(err));
    console.log("error axios");
  };

  const register = () => {
    setLoading(true);

    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem("userData", JSON.stringify(inputs));
        // navigation.navigate('HomeScreen');
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
        <Text style={{ color: COLORS.black, fontSize: 40, fontWeight: "bold" }}>
          Enter the details to purchase credit
        </Text>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 14, color: COLORS.grey }}></Text>
          </View>

          <View style={{ flex: 1, borderColor: "#cccccc", marginLeft: 10 }}>
            <Text style={{ fontSize: 14, color: COLORS.grey }}></Text>
          </View>
        </View>

        <View style={{ marginVertical: 20 }}>
          <Input
            onChangeText={(text) => handleOnchange(text, "name")}
            onFocus={() => handleError(null, "name")}
            iconName="person"
            label="name"
            placeholder="Enter Full Name"
            error={errors.name}
          />
          <Input
            onChangeText={(text) => handleOnchange(text, "email")}
            onFocus={() => handleError(null, "email")}
            Name="email-outline"
            label="Email Address"
            placeholder="Enter your Email"
            error={errors.email}
          />
          <Input
            keyboardType="numeric"
            onChangeText={(text) => handleOnchange(text, "CardNumber")}
            onFocus={() => handleError(null, "CardNumber")}
            iconName="person"
            label="Cardholder Number"
            placeholder="Enter Cardholder Number"
            error={errors.CardNumber}
          />
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 14, color: COLORS.grey }}>Month </Text>
              <Input
                style={{ fontSize: 12, color: COLORS.black }}
                maxLength={17}
                onChangeText={(text) => handleOnchange(text, "Month")}
                onFocus={() => handleError(null, "Month")}
                //iconName="email-outline"
                //label="Passenger"
                placeholder="Enter Month"
                error={errors.Month}
                keyboardType="numeric"
              />
            </View>

            <View style={{ flex: 1, borderColor: "#cccccc", marginLeft: 10 }}>
              <Text style={{ fontSize: 14, color: COLORS.grey }}>Year</Text>
              <Input
                style={{ fontSize: 14, color: COLORS.grey }}
                maxLength={12}
                onChangeText={(text) => handleOnchange(text, "Year")}
                onFocus={() => handleError(null, "Year")}
                //iconName="email-outline"
                //label="Passenger"
                placeholder="Enter Year"
                error={errors.Year}
                keyboardType="numeric"
              />
            </View>
          </View>
          <Text style={{ fontSize: 14, color: COLORS.grey }}>CVC</Text>
          <Input
            style={{ fontSize: 14, color: COLORS.grey }}
            maxLength={3}
            onChangeText={(text) => handleOnchange(text, "CVC")}
            onFocus={() => handleError(null, "CVC")}
            //iconName="email-outline"
            //label="Passenger"
            placeholder="Enter CVC"
            error={errors.CVC}
            keyboardType="numeric"
          />
          <Input
            style={{ fontSize: 14, color: COLORS.grey }}
            maxLength={7}
            onChangeText={(text) => {
              handleOnchange(text, "Amount"),
                AsyncStorage.setItem("vAmount", text);
            }}
            onFocus={() => handleError(null, "Amount")}
            //iconName="email-outline"
            //label="Passenger"
            placeholder="Enter Amount"
            error={errors.Amount}
            keyboardType="numeric"
          />
          <Text
            style={{
              color: COLORS.black,
              fontWeight: "bold",
              fontSize: 18,
              marginVertical: 10,
            }}
          >
            Click here to Purchase Credit
          </Text>
          <Button title="Purchase Credit" onPress={validate} />
          <Text
            style={{
              color: COLORS.black,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 12,
            }}
          >
            Click purchase credit to get credit and enjoy tours
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  criteriaRow: {
    flexDirection: "row",
    padding: 25,
    alignItems: "center",
  },
  horizontalLine: {
    width: "100%",
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  text: {
    paddingLeft: 15,
    paddingBottom: 15,
    marginBottom: 15,
    paddingTop: 15,
  },
  icon: {
    flex: 1,
    padding: 12,
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: "red",
    flexDirection: "row",
    backgroundColor: COLORS.primary,
  },
});

export default Purchasecredit;
