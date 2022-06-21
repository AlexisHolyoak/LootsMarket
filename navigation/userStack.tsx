import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Home";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "native-base";
import AnimatedTabBar, {
  TabsConfig,
  BubbleTabBarItemConfig,
} from "@gorhom/animated-tabbar";
import FollowingScreen from "../screens/FollowingScreen";
import LiveScreen from "../screens/LiveScreen";
import LotteryScreen from "../screens/LotteryScreen";
import StoreScreen from "../screens/StoreScreen";
const Stack = createStackNavigator();
const tabs: TabsConfig<BubbleTabBarItemConfig> = {
  Siguiendo: {
    // < Screen name
    labelStyle: {
      color: "black",
    },
    icon: {
      component: (props) => <FontAwesome name={"heart"} />,
      activeColor: "#000000",
      inactiveColor: "rgba(0,0,0,1)",
    },
    background: {
      activeColor: "#d6d6d6",
      inactiveColor: "rgba(173, 157, 156,0)",
    },
  },
  Live: {
    // < Screen name
    labelStyle: {
      color: "black",
    },
    icon: {
      component: (props) => <FontAwesome name={"video-camera"} />,
      activeColor: "#ffffff",
      inactiveColor: "rgba(0,0,0,1)",
    },
    background: {
      activeColor: "#d6d6d6",
      inactiveColor: "rgba(223,215,243,0)",
    },
  },
  Sorteos: {
    // < Screen name
    labelStyle: {
      color: "black",
    },
    icon: {
      component: (props) => <FontAwesome name={"star"} />,
      activeColor: "#ffffff",
      inactiveColor: "rgba(0,0,0,1)",
    },
    background: {
      activeColor: "#d6d6d6",
      inactiveColor: "rgba(223,215,243,0)",
    },
  },
  Tienda: {
    // < Screen name
    labelStyle: {
      color: "black",
    },
    icon: {
      component: (props) => <FontAwesome name={"shopping-basket"} />,
      activeColor: "#ffffff",
      inactiveColor: "rgba(0,0,0,1)",
    },
    background: {
      activeColor: "#d6d6d6",
      inactiveColor: "rgba(223,215,243,0)",
    },
  },
};
function TabBar() {
  //creates a tab navigator
  const Tab: any = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBar={(props) => (
        //add shadow to view
        <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <AnimatedTabBar
            tabs={tabs}
            {...props}
            style={{
              backgroundColor: "white",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          />
        </View>
      )}
    >
      <Tab.Screen name="Siguiendo" component={FollowingScreen} />
      <Tab.Screen name="Live" component={LiveScreen} />
      <Tab.Screen name="Sorteos" component={LotteryScreen} />
      <Tab.Screen name="Tienda" component={StoreScreen} />
    </Tab.Navigator>
  );
}
export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabBar"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="TabBar" component={TabBar} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
