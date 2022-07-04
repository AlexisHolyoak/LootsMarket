import React from "react";
import {
  Box,
  Center,
  Pressable,
  useColorModeValue,
  VStack,
  Divider,
  Stack,
  ScrollView,
  Heading,
  Image,
  Flex,
  Avatar,
  Button,
} from "native-base";
import { Video } from "expo-av";
import { Animated, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

export default function UserProfileScreen() {
  return (
    <ScrollView>
      <Flex>
        <Center>
          <Avatar
            marginTop={5}
            size={"xl"}
            bg="green.500"
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          ></Avatar>
        </Center>
        <Flex flexDirection={"row-reverse"}>
          <Button size={"sm"} marginRight={3}>
            Editar perfil
          </Button>
        </Flex>
        <Center>
          <Flex flexDirection={"row"}>
            <Flex>DNI: </Flex>
            <Flex>48265578</Flex>
          </Flex>
          <Flex flexDirection={"row"}>
            <Flex>Ciudad: </Flex>
            <Flex>Huacho</Flex>
          </Flex>
          <Flex flexDirection={"row"}>
            <Flex>Celular: </Flex>
            <Flex>79797845</Flex>
          </Flex>
        </Center>
      </Flex>
      <VStack space="2.5" mt="4" px="8">
        <Heading size="sm" textAlign="left">
          SORTEOS GANADOS
        </Heading>
        <ScrollView horizontal={true}>
          <Stack direction="row" mb="2.5" mt="1.5" space={5}>
            <Center
              size="100"
              bg="white"
              rounded="sm"
              _text={{
                color: "black",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              <Image
                alt="Alternate Text"
                source={{
                  uri: "https://www.fitoespinosa.com/tienda/wp-content/uploads/2019/09/1-10.jpg",
                }}
                size="lg"
              />
            </Center>
            <Center
              bg="white"
              size="100"
              rounded="sm"
              _text={{
                color: "black",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              <Image
                alt="Alternate Text"
                source={{
                  uri: "https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-mZhgGadH-medium.jpg",
                }}
                size="lg"
              />
            </Center>
            <Center
              size="100"
              bg="white"
              rounded="sm"
              _text={{
                color: "black",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              <Image
                alt="Alternate Text"
                source={{
                  uri: "https://www.mueblesyarte.pe/wp-content/gallery/reparacion-de-muebles/IMG_8394.JPG",
                }}
                size="lg"
              />
            </Center>
            <Center
              size="100"
              bg="gray.300"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              +
            </Center>
          </Stack>
        </ScrollView>
        <Heading size="sm" textAlign="left">
          PRODUCTOS ADQUIRIDOS
        </Heading>
        <ScrollView horizontal={true}>
          <Stack direction="row" mb="2.5" mt="1.5" space={5}>
            <Center
              size="100"
              bg="white"
              rounded="sm"
              _text={{
                color: "black",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              <Image
                alt="Alternate Text"
                source={{
                  uri: "https://wongfood.vteximg.com.br/arquivos/ids/547381-230-230/913215-1.jpg",
                }}
                size="lg"
              />
            </Center>
            <Center
              bg="white"
              size="100"
              rounded="sm"
              _text={{
                color: "black",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              <Image
                alt="Alternate Text"
                source={{
                  uri: "https://wongfood.vteximg.com.br/arquivos/ids/454796-230-230/M-Design-Bar-New-Osasco-10-Botellas-1-194402414.jpg",
                }}
                size="lg"
              />
            </Center>
            <Center
              size="100"
              bg="white"
              rounded="sm"
              _text={{
                color: "black",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              <Image
                alt="Alternate Text"
                source={{
                  uri: "https://rosenpe.vteximg.com.br/arquivos/livingestar_bergeres.jpg?v=636343519620630000",
                }}
                size="lg"
              />
            </Center>
            <Center
              size="100"
              bg="gray.300"
              rounded="sm"
              _text={{
                color: "warmGray.50",
                fontWeight: "medium",
              }}
              shadow={"3"}
            >
              +
            </Center>
          </Stack>
        </ScrollView>
      </VStack>
    </ScrollView>
  );
}
