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
                uri: "https://www.ejemplos.co/wp-content/uploads/2015/11/Logo-Chanel.jpg",
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
                uri: "https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/Clothing/clothing_logo_3.png",
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
                uri: "http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2018/08/logo-lacoste.jpg",
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
                uri: "https://i.pinimg.com/736x/d7/c3/01/d7c3010a9e57b086b26ec23e2c3a3745.jpg",
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
              resizeMode="center"
              source={{
                uri: "https://cdn.shopify.com/s/files/1/1452/5560/t/1/assets/logo.png",
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
                uri: "https://www.adobe.com/es/express/create/logo/media_103874e36b58ebce3c8688870cbc0bfbcc5ed981f.jpeg",
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
                uri: "https://www.logorapid.com/img/portafolio/max/electrope_g.gif",
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
              resizeMode="center"
              source={{
                uri: "https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/sites/4/2019/03/0126_h_logitech-logo_16.png",
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
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPw5Zu2T40hdB4yB1hrS2A9PTQoqrIlk9Qag&usqp=CAU",
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
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfR3CBmhdLVE6wuGZqGzFx_wZqUNG9_vhgg&usqp=CAU",
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
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSl9RTI774ugM1gTGm9OR9B3X8An74ZMinQw&usqp=CAU",
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
                uri: "https://4.bp.blogspot.com/-RCGy1TVZ310/Ui4vNNCJS5I/AAAAAAAALUM/F7ALD_7J0Vw/s1600/DELL-Logo-Font.jpg",
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
                uri: "http://fece.org/wp-content/uploads/2020/01/logo-NUEVO-Club-FECE.jpg",
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
              resizeMode="center"
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOETcyNkLBHKOpeItHNQslEJGCT1Eu5rLoQ&usqp=CAU",
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
                uri: "https://images.milanuncios.com/api/v1/ma-ad-media-pro/images/2cbc2d54-2219-472b-a80a-46591bac86d2?rule=hw396_70",
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
                uri: "https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/Clothing/clothing_logo_3.png",
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
                uri: "https://i.pinimg.com/originals/80/a9/3f/80a93fa61614b42d8ecf573b380f208e.jpg",
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
                uri: "https://www.zarla.com/images/zarla-mundo-chic-1x1-2400x2400-20210603-xbfv8xjqgwwwq6vww7kd.png",
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
                uri: "https://www.designevo.com/res/templates/thumb_small/coat-hanger-and-black-skirt.webp",
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
                uri: "https://www.designevo.com/res/templates/thumb_small/retro-mirror-and-elegant-woman.webp",
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
                uri: "https://factoryfy.es/wp-content/uploads/diseno-logotipo-moda-infantil.jpg",
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
                uri: "https://www.designevo.com/res/templates/thumb_small/yellow-handbag-and-black-t-shirt.webp",
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
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMUFXwBAwZnzs0Kc0tMxMs_KfSQBM0FgJsQ&usqp=CAU",
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
                uri: "https://www.zarla.com/images/zarla-mundo-chic-1x1-2400x2400-20220303-xygr7k9cp9rk6hf3fhjq.png?crop=1:1,smart&width=250&dpr=2",
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
                uri: "https://previews.123rf.com/images/john79/john791210/john79121000003/15779179-casa-dise%C3%B1o-de-logotipos-para-las-empresas.jpg",
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
              resizeMode="center"
              source={{
                uri: "https://img.freepik.com/vector-gratis/sillon-lampara-muebles-logotipo-empresa-comercial_23-2148462519.jpg?w=2000",
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
                uri: "https://www.zarla.com/images/zarla-cleanquick-1x1-2400x2400-20210614-chkvcbx3bychdmd6hrby.png?crop=1:1,smart&width=250&dpr=2",
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
                uri: "https://static-cse.canva.com/blob/211925/39-50-logotipos-que-te-inspiraran.png",
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
                uri: "https://www.zarla.com/images/zarla-destilo-1x1-2400x2400-20220322-mwfmxjcrpfd6cmrkkyk4.png",
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
                uri: "https://www.designevo.com/res/templates/thumb_small/simple-golden-construction.webp",
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
                uri: "https://www.designevo.com/res/templates/thumb_small/blue-circle-and-sofa-furniture.webp",
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
                uri: "https://thumbs.dreamstime.com/b/logo-vectorial-inmobiliario-creativo-adecuado-para-empresas-inmobiliarias-y-constructoras-hogar-icono-s%C3%ADmbolo-edificio-techo-de-162273954.jpg",
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
                uri: "https://www.designevo.com/res/templates/thumb_small/yellow-circle-and-bed.webp",
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
export default function FollowingScreen(props: any) {
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
