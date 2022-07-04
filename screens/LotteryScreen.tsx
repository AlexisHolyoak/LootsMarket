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
  Text,
  Flex,
} from "native-base";
import { Video } from "expo-av";
import { Animated, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const InitialRoute = () => (
  <ScrollView>
    <VStack space="2.5" mt="4" px="8">
      <Heading size="md" textAlign="center">
        POPULARES
      </Heading>
      <ScrollView horizontal={true}>
        <Stack direction={"column"}>
          <Stack direction="row" mb="2.5" mt="1.5" space={5}>
            <Center
              size="100"
              width={150}
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
                  uri: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21",
                }}
                size="lg"
              />
            </Center>
            <Center
              bg="white"
              size="100"
              width={150}
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
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6B4wCFVGJaZLSJvp42oApzzrr678c4W9Q6g&usqp=CAU",
                }}
                size="full"
              />
            </Center>
            <Center
              size="100"
              width={150}
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
                  uri: "https://crehana-blog.imgix.net/media/filer_public/c2/e1/c2e11470-3258-42e7-8cdf-aec64a706f1d/laptop-nueva-que-consejos.jpg",
                }}
                size="full"
              />
            </Center>
            <Center
              size="100"
              width={150}
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
          <Stack direction="row" mb="1" mt="0.5" space={5}>
            <Center flexDirection={"column"} width={150}>
              <Box flex={1}>
                <Text> Play Station 6</Text>
              </Box>
              <Box flex={1}>
                <Text fontSize={"xs"} bg={"amber.100"}>
                  S/3.00
                </Text>
              </Box>
            </Center>
            <Center flexDirection={"column"} width={150}>
              <Box flex={1}>
                <Text> Auriculares</Text>
              </Box>
              <Box flex={1} bg={"amber.100"}>
                <Text fontSize={"xs"}>S/3.00</Text>
              </Box>
            </Center>
            <Center flexDirection={"column"} width={150}>
              <Box flex={1}>
                <Text> Laptop</Text>
              </Box>
              <Box flex={1} bg={"amber.100"}>
                <Text fontSize={"xs"}>S/3.00</Text>
              </Box>
            </Center>
            <Center width={150}></Center>
          </Stack>
        </Stack>
      </ScrollView>

      <Divider />
      <Heading size="md" textAlign="center">
        MÁS
      </Heading>
      <ScrollView>
        <Stack direction={"row"}>
          <Stack mb="2.5" mt="1.5" direction="column" space={3}>
            <Box flexDirection={"row"} flex={1}>
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
                    uri: "https://ropamujerperu.com/wp-content/uploads/2017/02/vestido-vintage-lima-peru-002-324x324.jpg",
                  }}
                  size="lg"
                />
              </Center>
              <Box flexDirection={"column"} marginLeft={3}>
                <Box>
                  <Text>Falda</Text>
                </Box>
                <Box>
                  <Text fontSize={"xs"} bg={"amber.100"}>
                    S/30.00
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box flexDirection={"row"}>
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
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6B4wCFVGJaZLSJvp42oApzzrr678c4W9Q6g&usqp=CAU",
                  }}
                  size="lg"
                />
              </Center>
              <Box flexDirection={"column"} marginLeft={3}>
                <Box>
                  <Text>Polo anime</Text>
                </Box>
                <Box>
                  <Text fontSize={"xs"} bg={"amber.100"}>
                    S/3.00
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box flexDirection={"row"}>
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
                    uri: "https://i.linio.com/p/a9ccf2472eb50d05d9318fbcb5bedab6-product.jpg",
                  }}
                  size="lg"
                />
              </Center>
              <Box flexDirection={"column"} marginLeft={3}>
                <Box>
                  <Text>Casaca de cuero</Text>
                </Box>
                <Box>
                  <Text fontSize={"xs"} bg={"amber.100"}>
                    S/50.00
                  </Text>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </ScrollView>
    </VStack>
  </ScrollView>
);
const FirstRoute = () => (
  <ScrollView>
    <VStack space="2.5" mt="4" px="8">
      <Heading size="md" textAlign="center">
        POPULARES
      </Heading>
      <ScrollView horizontal={true}>
        <Stack direction={"column"}>
          <Stack direction="row" mb="2.5" mt="1.5" space={5}>
            <Center
              size="100"
              width={150}
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
                  uri: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21",
                }}
                size="lg"
              />
            </Center>
            <Center
              bg="white"
              size="100"
              width={150}
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
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6B4wCFVGJaZLSJvp42oApzzrr678c4W9Q6g&usqp=CAU",
                }}
                size="full"
              />
            </Center>
            <Center
              size="100"
              width={150}
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
                  uri: "https://crehana-blog.imgix.net/media/filer_public/c2/e1/c2e11470-3258-42e7-8cdf-aec64a706f1d/laptop-nueva-que-consejos.jpg",
                }}
                size="full"
              />
            </Center>
            <Center
              size="100"
              width={150}
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
          <Stack direction="row" mb="1" mt="0.5" space={5}>
            <Center flexDirection={"column"} width={150}>
              <Box flex={1}>
                <Text> Play Station 6</Text>
              </Box>
              <Box flex={1}>
                <Text fontSize={"xs"} bg={"amber.100"}>
                  S/3.00
                </Text>
              </Box>
            </Center>
            <Center flexDirection={"column"} width={150}>
              <Box flex={1}>
                <Text> Auriculares</Text>
              </Box>
              <Box flex={1} bg={"amber.100"}>
                <Text fontSize={"xs"}>S/3.00</Text>
              </Box>
            </Center>
            <Center flexDirection={"column"} width={150}>
              <Box flex={1}>
                <Text> Laptop</Text>
              </Box>
              <Box flex={1} bg={"amber.100"}>
                <Text fontSize={"xs"}>S/3.00</Text>
              </Box>
            </Center>
            <Center width={150}></Center>
          </Stack>
        </Stack>
      </ScrollView>
      <Divider />
      <Heading size="md" textAlign="center">
        MÁS
      </Heading>
      <ScrollView>
        <Stack direction={"row"}>
          <Stack mb="2.5" mt="1.5" direction="column" space={3}>
            <Box flexDirection={"row"} flex={1}>
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
                    uri: "https://crehana-blog.imgix.net/media/filer_public/c2/e1/c2e11470-3258-42e7-8cdf-aec64a706f1d/laptop-nueva-que-consejos.jpg",
                  }}
                  size="lg"
                />
              </Center>
              <Box flexDirection={"column"} marginLeft={3}>
                <Box>
                  <Text>Laptop</Text>
                </Box>
                <Box>
                  <Text fontSize={"xs"} bg={"amber.100"}>
                    S/4990.00
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box flexDirection={"row"}>
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
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6B4wCFVGJaZLSJvp42oApzzrr678c4W9Q6g&usqp=CAU",
                  }}
                  size="lg"
                />
              </Center>
              <Box flexDirection={"column"} marginLeft={3}>
                <Box>
                  <Text>Auriculares</Text>
                </Box>
                <Box>
                  <Text fontSize={"xs"} bg={"amber.100"}>
                    S/30.00
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box flexDirection={"row"}>
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
                    uri: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21",
                  }}
                  size="lg"
                />
              </Center>
              <Box flexDirection={"column"} marginLeft={3}>
                <Box>
                  <Text>Play Station</Text>
                </Box>
                <Box>
                  <Text fontSize={"xs"} bg={"amber.100"}>
                    S/5000.00
                  </Text>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </ScrollView>
    </VStack>
  </ScrollView>
);
const SecondRoute = () => (
  <ScrollView>
    <VStack space="2.5" mt="4" px="8">
      <Heading size="md" textAlign="center">
        POPULARES
      </Heading>
      <ScrollView horizontal={true}>
        <Stack direction={"column"}>
          <Stack direction="row" mb="2.5" mt="1.5" space={5}>
            <Center
              size="100"
              width={150}
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
                resizeMode="contain"
                source={{
                  uri: "https://ropamujerperu.com/wp-content/uploads/2017/02/vestido-vintage-lima-peru-002-324x324.jpg",
                }}
                size="lg"
              />
            </Center>
            <Center
              bg="white"
              size="100"
              width={150}
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
                  uri: "https://www.dhresource.com/0x0/f2/albu/g6/M00/61/DD/rBVaSFs5VcaAaxZhAAShjTG48gc677.jpg",
                }}
                size="full"
              />
            </Center>
            <Center
              size="100"
              width={150}
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
                  uri: "https://oechsle.vteximg.com.br/arquivos/ids/8233226-800-800/2069918.jpg",
                }}
                size="full"
              />
            </Center>
            <Center
              size="100"
              width={150}
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
          <Stack direction="row" mb="1" mt="0.5" space={5}>
            <Center flexDirection={"column"} width={150}>
              <Box flex={1}>
                <Text> Falda</Text>
              </Box>
              <Box flex={1}>
                <Text fontSize={"xs"} bg={"amber.100"}>
                  S/5.00
                </Text>
              </Box>
            </Center>
            <Center flexDirection={"column"} width={150}>
              <Box flex={1}>
                <Text> Collar</Text>
              </Box>
              <Box flex={1} bg={"amber.100"}>
                <Text fontSize={"xs"}>S/3.00</Text>
              </Box>
            </Center>
            <Center flexDirection={"column"} width={150}>
              <Box flex={1}>
                <Text> Pantalon</Text>
              </Box>
              <Box flex={1} bg={"amber.100"}>
                <Text fontSize={"xs"}>S/5.00</Text>
              </Box>
            </Center>
            <Center width={150}></Center>
          </Stack>
        </Stack>
      </ScrollView>

      <Divider />
      <Heading size="md" textAlign="center">
        MÁS
      </Heading>
      <ScrollView>
        <Stack direction={"row"}>
          <Stack mb="2.5" mt="1.5" direction="column" space={3}>
            <Box flexDirection={"row"} flex={1}>
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
                    uri: "https://oechsle.vteximg.com.br/arquivos/ids/8233226-800-800/2069918.jpg",
                  }}
                  size="lg"
                />
              </Center>
              <Box flexDirection={"column"} marginLeft={3}>
                <Box>
                  <Text>Pantalones</Text>
                </Box>
                <Box>
                  <Text fontSize={"xs"} bg={"amber.100"}>
                    S/5.00
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box flexDirection={"row"}>
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
                    uri: "https://www.dhresource.com/0x0/f2/albu/g6/M00/61/DD/rBVaSFs5VcaAaxZhAAShjTG48gc677.jpg",
                  }}
                  size="lg"
                />
              </Center>
              <Box flexDirection={"column"} marginLeft={3}>
                <Box>
                  <Text>Collar</Text>
                </Box>
                <Box>
                  <Text fontSize={"xs"} bg={"amber.100"}>
                    S/3.00
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box flexDirection={"row"}>
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
                    uri: "https://ropamujerperu.com/wp-content/uploads/2017/02/vestido-vintage-lima-peru-002-324x324.jpg",
                  }}
                  size="lg"
                />
              </Center>
              <Box flexDirection={"column"} marginLeft={3}>
                <Box>
                  <Text>Falda</Text>
                </Box>
                <Box>
                  <Text fontSize={"xs"} bg={"amber.100"}>
                    S/5.00
                  </Text>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </ScrollView>
    </VStack>
  </ScrollView>
);
const ThirdRoute = () => (
  <ScrollView>
    <VStack space="2.5" mt="4" px="8">
      <Heading size="md" textAlign="center">
        POPULARES
      </Heading>
      <ScrollView horizontal={true}>
        <Stack direction={"column"}>
          <Stack direction="row" mb="2.5" mt="1.5" space={5}>
            <Center
              size="100"
              width={150}
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
                  uri: "https://photos-eu.bazaarvoice.com/photo/2/cGhvdG86bmFjb24tZnI/be449a9c-e20e-503f-a856-9683bb6ed6a0",
                }}
                size="lg"
              />
            </Center>
            <Center
              bg="white"
              size="100"
              width={150}
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
                  uri: "https://www.hogarmania.com/archivos/201609/brico-0586-2-puesta-a-punto-mesa-exterior-paso-7-final-1280x720x80xX.jpg",
                }}
                size="full"
              />
            </Center>
            <Center
              size="100"
              width={150}
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
                  uri: "https://i.pinimg.com/564x/0b/36/fd/0b36fdab829d083550f4495acc77eefe.jpg",
                }}
                size="full"
              />
            </Center>
            <Center
              size="100"
              width={150}
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
          <Stack direction="row" mb="1" mt="0.5" space={5}>
            <Center flexDirection={"column"} width={150}>
              <Box flex={1}>
                <Text>Silla gamer</Text>
              </Box>
              <Box flex={1}>
                <Text fontSize={"xs"} bg={"amber.100"}>
                  S/5.00
                </Text>
              </Box>
            </Center>
            <Center flexDirection={"column"} width={150}>
              <Box flex={1}>
                <Text>Mesa redonda</Text>
              </Box>
              <Box flex={1} bg={"amber.100"}>
                <Text fontSize={"xs"}>S/3.00</Text>
              </Box>
            </Center>
            <Center flexDirection={"column"} width={150}>
              <Box flex={1}>
                <Text>Mesa de cocina</Text>
              </Box>
              <Box flex={1} bg={"amber.100"}>
                <Text fontSize={"xs"}>S/5.00</Text>
              </Box>
            </Center>
            <Center width={150}></Center>
          </Stack>
        </Stack>
      </ScrollView>

      <Divider />
      <Heading size="md" textAlign="center">
        MÁS
      </Heading>
      <ScrollView>
        <Stack direction={"row"}>
          <Stack mb="2.5" mt="1.5" direction="column" space={3}>
            <Box flexDirection={"row"} flex={1}>
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
                    uri: "https://i.pinimg.com/564x/0b/36/fd/0b36fdab829d083550f4495acc77eefe.jpg",
                  }}
                  size="lg"
                />
              </Center>
              <Box flexDirection={"column"} marginLeft={3}>
                <Box>
                  <Text>Mesa de cocina</Text>
                </Box>
                <Box>
                  <Text fontSize={"xs"} bg={"amber.100"}>
                    S/5.00
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box flexDirection={"row"}>
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
                    uri: "https://oechsle.vteximg.com.br/arquivos/ids/2305433-1000-1000/1149657_1.jpg",
                  }}
                  size="lg"
                />
              </Center>
              <Box flexDirection={"column"} marginLeft={3}>
                <Box>
                  <Text>Sofa</Text>
                </Box>
                <Box>
                  <Text fontSize={"xs"} bg={"amber.100"}>
                    S/3.00
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box flexDirection={"row"}>
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
                    uri: "https://i.pinimg.com/564x/0b/36/fd/0b36fdab829d083550f4495acc77eefe.jpg",
                  }}
                  size="lg"
                />
              </Center>
              <Box flexDirection={"column"} marginLeft={3}>
                <Box>
                  <Text>Mesa</Text>
                </Box>
                <Box>
                  <Text fontSize={"xs"} bg={"amber.100"}>
                    S/5.00
                  </Text>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </ScrollView>
    </VStack>
  </ScrollView>
);
const renderScene = SceneMap({
  initial: InitialRoute,
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});
export default function LotteryScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "initial", title: "Inicio" },
    { key: "first", title: "Electro.." },
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
