import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import constant from "../constants/navigatorStrings";
import { ShopNavigation } from "./ShopNavigator";

const AppStack = createNativeStackNavigator();


const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={constant.SHOP}
        screenOptions={{ headerShown: false }}
      >
        <AppStack.Screen name={constant.SHOP} component={ShopNavigation} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
