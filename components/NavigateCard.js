import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Google_Maps_Key } from "@env";
import React from "react";
import tw from "twrnc";
import { setDestination } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "@rneui/base";

const NavigateCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Eric </Text>
      <View style={tw` border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionCard");
            }}
            fetchDetails={true}
            query={{
              key: Google_Maps_Key,
              language: "en",
            }}
            minLength={2} // minimum length of text to search
            autoFocus={false}
            enablePoweredByContainer={false}
            debounce={400}
            nearbyPlacesAPI="GooglePlacesSearch"
            styles={{
              textInputContainer: {
                backgroundColor: "rgba(0,0,0,0)",
                paddingHorizontal: 20,
                paddingBottom: 0,
              },
              textInput: {
                backgroundColor: "#DDDDDF",
                borderRadius: 0,
                fontSize: 18,
              },
              listView: {
                position: "absolute",
              },
            }}
          />
        </View>
      </View>
      <View style={tw`mt-12`}>
        <NavFavourites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100 `}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("RideOptionCard");
          }}
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between bg-white w-24 px-4 py-3 rounded-full`}
        >
          <Icon name="fast-food" type="ionicon" color="black" size={16} />
          <Text style={tw`text-black text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
