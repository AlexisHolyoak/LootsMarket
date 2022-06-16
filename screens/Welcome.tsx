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
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { StackScreenProps } from "@react-navigation/stack";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });
  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
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
          Iniciar Sesión
        </Text>
      </Flex>
      <Flex w="75%">
        <Input
          variant={"underlined"}
          size="sm"
          placeholder="Correo electrónico"
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          InputRightElement={
            <Icon name="envelope" size={16} color="muted.400" />
          }
        />
        <Input
          variant={"underlined"}
          size="sm"
          type="password"
          placeholder="Contraseña"
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          InputRightElement={<Icon name="lock" size={16} color="muted.400" />}
          mt="10"
        />
      </Flex>
      <Flex>
        <Button
          mt={"5%"}
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
          onPress={signIn}
        >
          Iniciar Sesión
        </Button>
        <Text textAlign={"center"} mt="3" mb={3}>
          O
        </Text>
        <Link
          fontSize={60}
          onPress={() => navigation.navigate("Sign Up")}
          _text={{
            color: "blue.700",
          }}
        >
          Crear una cuenta
        </Link>
      </Flex>
    </Box>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 2,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    flex: 1,
  },
  button: {
    marginTop: 10,
  },
});

export default WelcomeScreen;
