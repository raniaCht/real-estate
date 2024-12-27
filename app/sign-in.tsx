import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full flex flex-col justify-center items-center">
        <Image
          source={images.onboarding}
          className="h-4/6 w-full"
          resizeMode="contain"
        />
        <View className="flex justify-center items-center mx-4">
          <Text className="font-rubik-light text-black-2 text-base mt-2">
            Welcome to Real Mouhamed
          </Text>
          <Text className="text-[32px] text-center  font-rubik-bold text-black-1">
            Let’s get you closer to{" "}
            <Text className="text-primary-1"> your ideal home </Text>
          </Text>
          <Text className="text-black-2 text-lg font-rubik-light">
            Login to Real Mouhamed with Google
          </Text>
          <TouchableOpacity
            onPress={() => {}}
            className=" shadow-md shadow-zinc-400 bg-red w-full py-2"
          >
            <View className="flex flex-row justify-center items-center gap-2">
              <Image
                source={icons.google}
                className="w-4 h-5"
                resizeMode="contain"
              />
              <Text className="text-black-1 text-lg text-center font-rubik">
                Sign up with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
