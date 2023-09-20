import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";


const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../../assets/images/istockphoto-1400006832-612x612.jpg")}
        style={{
          marginTop: 170,
          marginBottom: 60,
          width: 350,
          height: 350,
          borderRadius: 20,
        }}
      />

      <Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
        Easy Way to Buy
      </Text>

      <Text
        style={{
          fontSize: 42,
          fontWeight: "bold",
          color: "#3c444c",
          marginTop: 44,
          marginBottom: 40,
        }}
      >
        Save your money
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("Registration")}
        style={{
          backgroundColor: "#f96163",
          borderRadius: 18,

          paddingVertical: 18,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
