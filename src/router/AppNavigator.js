import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import constant from "../constants/navigatorStrings";
import { ShopNavigation } from "./ShopNavigator";
import { AuthNavigation } from "./AuthNavigator";

const AppStack = createNativeStackNavigator();


const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName={constant.AUTH}
        screenOptions={{ headerShown: false }}
      >
        <AppStack.Screen name={constant.AUTH} component={AuthNavigation} />
        <AppStack.Screen name={constant.SHOP} component={ShopNavigation} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
