import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Google_Maps_Key } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const GooglePlacesInput = () => {
  const dispatch = useDispatch();
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        dispatch(
          setOrigin({
            location: details.geometry.location,
            description: data.description,
          })
        );
        dispatch(setDestination(null));
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
        },
        listView: {
          position: "absolute",
        },
      }}
    />
  );
};

export default GooglePlacesInput;
