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
  Pressable,
  useColorModeValue,
  VStack,
  Spacer,
  Divider,
  Stack,
  ScrollView,
  Heading,
} from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { Animated, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
const InitialRoute = () => (
  <ScrollView>
    <VStack space="2.5" mt="4" px="8">
      <Heading size="md" textAlign="center">
        EN VIVO
      </Heading>
      <ScrollView horizontal={true}>
        <Stack direction="row" mb="2.5" mt="1.5" space={5}>
          <Center
            size="100"
            width={100}
            bg="white"
            rounded="sm"
            _text={{
              color: "black",
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            Item 1
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
            Item 2
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
            Item 3
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

      <Divider />
      <Heading size="md" textAlign="center">
        SORTEOS
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
            Item 1
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
            Item 2
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
            Item 3
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
      <Divider />
      <Heading size="md" textAlign="center">
        TIENDA
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
            Item 1
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
            Item 2
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
            Item 3
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
const FirstRoute = () => (
  <Center flex={1} my="4">
    This is Tab 1 YES
  </Center>
);

const SecondRoute = () => (
  <Center flex={1} my="4">
    <VStack></VStack>
  </Center>
);
const ThirdRoute = () => (
  <Center flex={1} my="4">
    This is Tab 2
  </Center>
);
const renderScene = SceneMap({
  initial: InitialRoute,
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});
export default function FollowingScreen(props: any) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "initial", title: "Inicio" },
    { key: "first", title: "Electrónica" },
    { key: "second", title: "Moda" },
    { key: "third", title: "Hogar" },
  ]);
  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map((x: any, i: any) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route: any, i: any) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex: any) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color =
            index === i
              ? useColorModeValue("#000", "#e5e5e5")
              : useColorModeValue("#1f2937", "#a1a1aa");
          const borderColor =
            index === i
              ? "black"
              : useColorModeValue("coolGray.200", "gray.400");
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    color,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };
  return (
    <TabView
      swipeEnabled={false}
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
