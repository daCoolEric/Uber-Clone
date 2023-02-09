import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Google_Maps_Key } from "@env";
import GooglePlacesInput from "../components/GooglePlaces";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://download.logo.wine/logo/Uber/Uber-Logo.wine.png",
          }}
        />
        <View style={{ position: "relative", zIndex: 1000 }}>
          <GooglePlacesInput />
        </View>

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
