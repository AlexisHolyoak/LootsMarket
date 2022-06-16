import React from "react";
import "./config/firebase";
import RootNavigation from "./navigation";
import {
  NativeBaseProvider,
  Box,
  Text,
  KeyboardAvoidingView,
  Center,
} from "native-base";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    handwritten: require("./assets/fonts/handwritten.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  } else {
    console.log("Font is loaded");
  }
  return (
    <NativeBaseProvider>
      <Box flex={1}>
        <RootNavigation />
      </Box>
    </NativeBaseProvider>
  );
}
