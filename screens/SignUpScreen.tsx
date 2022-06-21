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
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const SignUpScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });
  async function signUp() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    setValue({
      ...value,
      error: "",
    });
    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      navigation.navigate("Sign In");
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }
  return (
    <Box flex={1} justifyContent="center" alignItems={"center"}>
      <Flex justifyContent="center">
        <Text fontFamily={"handwritten"} fontSize={50} alignContent={"center"}>
          Crear una cuenta
        </Text>
      </Flex>
      <Flex w="75%">
        <Input
          variant={"underlined"}
          size="sm"
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          placeholder="Correo electrónico"
          InputRightElement={<FontAwesome name="envelope" size={16} />}
        />
        <Input
          variant={"underlined"}
          size="sm"
          type="password"
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          placeholder="Contraseña"
          InputRightElement={<FontAwesome name={"lock"} size={16} />}
          mt="10"
        />
      </Flex>
      <Flex justifyContent={"center"}>
        <Button
          mt={"10%"}
          variant={"outline"}
          colorScheme="white"
          _text={{
            color: "black",
          }}
          size={"md"}
          textAlign={"center"}
          justifyContent="center"
          alignContent={"center"}
          alignItems="center"
          onPress={signUp}
        >
          Registarse
        </Button>
      </Flex>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default SignUpScreen;
