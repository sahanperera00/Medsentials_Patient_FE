import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import tw from "twrnc";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { pharmacies } from "../assets/dummy/pharmacy";
import { router } from "expo-router";

export default function locatePharmacy() {
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Location permission not granted");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setPosition({
        latitude,
        longitude,
        latitudeDelta: 0.006,
        longitudeDelta: 0.006,
      });
      setLoading(false);
    };

    fetchUserLocation();
  }, [loading]);

  return (
    <View style={tw`flex-1 items-center px-5`}>
      {position && !loading ? (
        <MapView
          mapType="standard"
          userInterfaceStyle="light"
          style={tw`w-full h-full`}
          tintColor="#7e57c2"
          initialRegion={position}
          showsUserLocation={true}
          showsMyLocationButton={true}
          followsUserLocation={false}
          showsCompass={true}
          scrollEnabled={true}
          zoomEnabled={true}
          pitchEnabled={false}
          rotateEnabled={true}
        >
          {pharmacies.map((data, index) => {
            return (
              <Marker
                pinColor="#7e57c2"
                key={index}
                title={data.name}
                description={data.description}
                coordinate={{
                  latitude: data.latitude,
                  longitude: data.longitude,
                }}
                onPress={() => {
                  router.push("/checkout");
                }}
              />
            );
          })}
        </MapView>
      ) : (
        <View style={tw`flex-1 items-center justify-center`}>
          <Text style={tw`text-3xl text-center font-bold`}>
            Fetching your location...
          </Text>
          <View class="w-full h-50 animate-pulse flex space-x-4">
            <View class="rounded-full bg-gray-700 h-full w-full"></View>
          </View>
        </View>
      )}
    </View>
  );
}
