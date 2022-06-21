import React from "react";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import UserStack from "./userStack";
import AuthStack from "./authStack";

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <UserStack /> : <AuthStack />;
}
export { default as StoreScreen } from "../screens/StoreScreen";
export { default as FollowingScreen } from "../screens/FollowingScreen";
export { default as LotteryScreen } from "../screens/LotteryScreen";
export { default as LiveScreen } from "../screens/LiveScreen";
