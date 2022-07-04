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
} from "native-base";
import { Video } from "expo-av";
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
            width={150}
            bg="white"
            rounded="sm"
            _text={{
              color: "black",
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            <Video
              isLooping
              isMuted={true}
              resizeMode="cover"
              shouldPlay
              style={{ width: 150, height: 100 }}
              source={{
                uri: "https://video-weaver.rio01.hls.ttvnw.net/v1/playlist/CpoFfAGrl5cPdtEYSJo11YD3ViyIDSOPvGCd6aA--pUDQmOGUz0b0Ecc1Uecq3kZ4jEWdFB4xkHI2gxYjqYWkawY0vlmOzbFmL-GMil-gBdgQ5C-PcsdUjNTtCYa-SYV-_34G_Q_BQX0bCbf3zKdJ-1omYcTfQ9OXYtIuWILJA8rclHTVrGpX36cRTOtPGO1zyDH7bRbMKaBfHikqYWPTKb3tJGvttPM7zhf9sFkzqFC9D6VaCNbS6N62a4jEB0m9S3GITtNshzoq56bmmYN12jRdKjPFJpzJ-KqE_2fWg0pHHV7fmZLMu3oUyx_WALD-caysipH89NfOAcEde14CBpVu9L16wm9YBbd5RdUgtjF7U8TBfWZPcNbH1tfLiX6ecq7YqRVXPztHtzwrjfblX_Zqnr3c6TQuDKD2IhmVay7bjPivwOwUwrJSeHzyfQ6GEn-84fAWL1wpjWxh-Nmvh9KSrQT4zyayLZEZIzIipTX1_3uCSmQIGH8q9VtC5w1eizngPSP06MzapJXYFp8P_gfWHOG6CCKG0UyHOmssH-7ysHDb183iiI_enZM3rSJJoV4__7uKXbvkbDIOZY81hqqpnIfTLAl81qMzmCbCLd051wk1fXt9ADCMJmze2VACkpclLAqkSaagDirHzE7HyQw4NI28_TR_95OyWcHkZhNoi9KMEVX-LlubdCbQnv3nuGVQtU8YDpt8lwTi8lSKV6jkkQt2gE-PZ7MO_7I1jpbjTsjMhLF-p2vNXlDM2wFanAwHmOMcnLQrzfWsOS0Uw5qvnzirYrB8dUy4qjSYaTrJP5wLqwLn1PS8J-YK1M03ciJwTcRcnwxriQwVoK1_7PIB2JVVtDjJyna6A71DSsh06hQDEUtCBnRyWwaGgwdJABsXtyaIVcvmsMgASoJZXUtd2VzdC0yMIIE.m3u8",
              }}
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
            <Video
              isLooping
              isMuted={true}
              resizeMode="cover"
              shouldPlay
              style={{ width: 150, height: 100 }}
              source={{
                uri: "https://video-weaver.rio01.hls.ttvnw.net/v1/playlist/CpEFsAUtvx0gC2ZXlLfAwjcvnCX6seSFrNonGok0FFcUhLKmpDNUQEOjFvQL6NWnv_FsNGIyNYVp6PDnVwATqg3rwUzIA7oV5FhKQYDUS7SnhlruTdMsm-BI9IsisdqnpyMYNmIxdFfUf6XZNU7r41cnA8mxAHTy0BKuP53J3buF35X31jIIk4p37oE-elQUjiPh4mGXZlFPvXeQ3TUpL7SG3Af0Qi3uuxnZhau6Ut1E1Q31w2kfE9QfabB9E6s84AD8uuVq2MVJtHgQY9ENRe8EyTIaqSmRF5fMfp2LDUyxEmeVWu3Rvz4dObiXi8olzryleC5DaMFTU5Uc4_X2KWrzc5bzEDtdNrfs9M4MQgxUmeSZ18daDTUAYYnX0_Jnyh339CuY6AkDK4MBDsN5Whel5Cfyme7u1yXLexjKVAxKcPbSWMjjj6d23Rs5Wqhv_fHy8iBSwjqpQtEUqY-L-luNpgCTroyXkQDKHoVuKHfMkAGRAN7vA6hTER-kfHyi9P4h1MoOLT8scmXM11pf8LozbLnS8E1oQOX_z4bYNFJRlHu3haXaGIHlec5Xsz-lpSbdVXfj64qftnTk8RUapsctjRZIBjNUvEDREppaFPhoewVHbZVhog-kana09UL0aTmPMJPTQkpe0VikjJAURiqJKVZylOmnqZxk86qr38jTPjVTSNHz8yK1JV3er-nAVfMcmEBIrQJV87GjS2sjpMxxKbSC6Uw-xI9Pesp6jeU2NunnZmu-Y1B9854ZETq-KhoPd6QZSFscgmn0g40jhsFY8SjYaRCy4KmXmhS9bPGnab2nC7scfQQeEdFS2Mu0djPr5wAcFYtZIIbJVoPnR4TjBaJCrE4eiyqXfBx6J3FhCacmGgwo3ErCp6zKUyw1guQgASoJdXMtZWFzdC0yMIAE.m3u8",
              }}
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
            <Video
              isLooping
              isMuted={true}
              resizeMode="cover"
              shouldPlay
              style={{ width: 150, height: 100 }}
              source={{
                uri: "https://video-weaver.rio01.hls.ttvnw.net/v1/playlist/CpEFs4xmXP8Mc3hpnbe6RpuQWCQlWlzuZs-KlJJ9ilTYsE2ZdZMGnncKHW7qMkx4vt35HLkOkSjjNM0EvbL6z9Ah5WWq2xJ30tKPJxACTyoQtUox_Bz3PrmBPxpBn6ndINkr2XCeJxaWvo2r9AVH1NvnxMHN3y-emvageXV0e7ZCnIp6aYnRIvRjqjP0jcPbgsjzliFEFwuH4mOV0zlMuJX1jgUj5v-_O1PorKBxGXZUBAeA6IQOLy8Mp9koYVyByQdYvku4EIQhxXF88wMy30Srb6CoVsqkjp52M150nzgXynS9Poei9AJkm9yZEdNoybEcSjZF5SoNFl5zppsufCVjlhU2V2sutd2UDZTi2Z6oWvQhgFbjRYwtWGKfgLMSrmIMm8yVo15pypcSW4t8LsWkp8VuAv8Rkrh2wbdiwkhCp4nvq5Ap6_NsvgdEeRxa3PnJk5de5ZsplAX4Nxq5l4zM_RMrVKDNU3_y2IY4UtuCGUjOZrR7gz7jAnLqITC-P9yRRaRZOle2tKXXt4JuxDfpywy_o4SjegKPi-CgxGKVzSGPN9DE3Nn21Hl_LXdgVftCuypKCQzjbQ3IYM8de47N1I6nhpLeaVkrZlaSHPmjylT72XT1Sun2VCWC45iW9xYLjsegjD5QDHSYxZ8zOarURAuHR-ivObd5dv67C5EfRR7djeWmv-gx11Y912mZOS83ihAYYI4pTK_PQvfrRcTQJ6y25MXPMp5GPhlE5nyn74dKY_GoKr1CBbxs2Mr_fOlVpgnXhrooWo7sCSygv13OAy02yvAMLEL5l7KFqnstWhsp52AuDh-SpSxhpHuOwEvExJERdsruJ80ou942VqnA6jXU-aazzmJyzVznMc-e3gGGGgz8E4Avo6enDMymzqQgASoJdXMtZWFzdC0yMIAE.m3u8",
              }}
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
            <Image
              alt="Alternate Text"
              source={{
                uri: "https://i.pinimg.com/564x/43/a5/e4/43a5e43bf77708c0643c1a06698ca363.jpg",
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
                uri: "https://promart.vteximg.com.br/arquivos/ids/4576698-1000-1000/129597.jpg",
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
                uri: "https://i.pinimg.com/564x/55/e6/8a/55e68aa4438f642cdb228888e17d84c6.jpg",
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
            <Image
              alt="Alternate Text"
              source={{
                uri: "https://img.staticdj.com/f99a881fe711f418b9774f610ccc743d_1080x.webp",
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
                uri: "https://ae01.alicdn.com/kf/H80489b37721a47dfa38e309168b504058/Sudaderas-Con-Capucha-Con-estampado-de-Los-ngeles-y-California-para-mujer-jers-is-de-hombro.jpg_Q90.jpg_.webp",
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
                uri: "https://img.staticdj.com/f99a881fe711f418b9774f610ccc743d_1080x.webp",
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
const FirstRoute = () => (
  <ScrollView>
    <VStack space="2.5" mt="4" px="8">
      <Heading size="md" textAlign="center">
        RECIENTES
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
                uri: "https://i.pinimg.com/564x/43/a5/e4/43a5e43bf77708c0643c1a06698ca363.jpg",
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
                uri: "https://m.media-amazon.com/images/I/51ByTxwTbJL.jpg",
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
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx4gEjpOV4XrL7c7VeK8UtfHfXGephWS_oCA&usqp=CAU",
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
      <Divider />
      <Heading size="md" textAlign="center">
        POPULARES
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
                uri: "https://images.samsung.com/is/image/samsung/assets/ar/p6_gro2/lifestyle-tvs1/accessibility/ha-accessibility/accessibility_home-appliance_feature-benefit01_mo.png",
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
                uri: "https://oechsle.vteximg.com.br/arquivos/ids/3468592/image-5f4418db33c94b8baeea9b8d4e2c178f.jpg",
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
                uri: "https://www.rosashermanos.com.uy/imgs/productos/productos34_5780.png",
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
      <Divider />
      <Heading size="md" textAlign="center">
        MÁS
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
                uri: "https://ae01.alicdn.com/kf/Hbab4eb9038dc4310a242bf415aca7aa5S/Cocina-de-Inducci-n-c-ncava-wok-Juego-de-2-piezas-de-sart-n-de-inducci.jpg_Q90.jpg_.webp",
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
                uri: "https://s.alicdn.com/@sc04/kf/Hccb3f3f3ac184894af89fce0c817af997.jpg",
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
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUTZWvy2CTlta3k600kB69H5pD6cepek7vA&usqp=CAU",
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

const SecondRoute = () => (
  <ScrollView>
    <VStack space="2.5" mt="4" px="8">
      <Heading size="md" textAlign="center">
        RECIENTES
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
                uri: "https://i.linio.com/p/a9ccf2472eb50d05d9318fbcb5bedab6-product.jpg",
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
                uri: "https://cf.shopee.com.mx/file/f9e95e99f29fc6e2ab642a586fba4c08_tn",
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
                uri: "https://ropamujerperu.com/wp-content/uploads/2017/02/vestido-vintage-lima-peru-002-324x324.jpg",
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
      <Divider />
      <Heading size="md" textAlign="center">
        POPULARES
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
                uri: "https://www.dhresource.com/260x260s/f2-albu-g10-M00-12-55-rBVaVl46zz-AcvuxAAGCiav9k0I726.jpg/women-039-s-blouses-shirts-summer-women-mexican.jpg",
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
                uri: "https://i.ebayimg.com/thumbs/images/g/DvMAAOSw1J5bhYo-/s-l225.jpg",
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
                uri: "https://i.linio.com/p/3973bc1d62e8ce5fef51d54edce10765-product.jpg",
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
      <Divider />
      <Heading size="md" textAlign="center">
        MÁS
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
                uri: "https://oechsle.vteximg.com.br/arquivos/boton-plp-amc-casaca-m.png",
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
                uri: "https://www.polinesia.es/es-es/blog/wp-content/uploads/2018/03/tenis-monocolor-e1520937366784.jpg",
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
                uri: "https://cdn.laredoute.com/products/9/2/6/926c24b8dc0de4a0d0f88f22ce1aa72d.jpg",
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
const ThirdRoute = () => (
  <ScrollView>
    <VStack space="2.5" mt="4" px="8">
      <Heading size="md" textAlign="center">
        RECIENTES
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
      <Divider />
      <Heading size="md" textAlign="center">
        POPULARES
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
                uri: "https://plazavea.vteximg.com.br/arquivos/categoria-mueblesterraza-D.png",
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
                uri: "https://www.venta-de.com.pe/sh-img/muebles-juego-sala-D_NQ_NP_247911-MLV20665052403_042016-O_sillon%2Bmueble.jpg",
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
                uri: "https://plazavea.vteximg.com.br/arquivos/categoria-mueblesdormitorio-D.png",
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
      <Divider />
      <Heading size="md" textAlign="center">
        MÁS
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
const renderScene = SceneMap({
  initial: InitialRoute,
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});
export default function StoreScreen(props: any) {
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
