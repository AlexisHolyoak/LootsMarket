import React from "react";
import {
  Box,
  Input,
  Text,
  View,
  Button,
  Link,
  KeyboardAvoidingView,
  Flex,
  Center,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function LiveScreen() {
  return <Center>Hello Live Screen</Center>;
}
