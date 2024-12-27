import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text className="text-red-700 text-3xl font-rubik-light">Home</Text>
      <Link href="/sign-in" className="text-blue-700">
        Sign In{" "}
      </Link>
    </View>
  );
};

export default Home;
