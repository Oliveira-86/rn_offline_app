import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import constant from "../constants/navigatorStrings";
import { ShopNavigation } from "./ShopNavigator";
import { AuthNavigation } from "./AuthNavigator";
import StartupScreen from "../screens/StartupScreen";

const AppStack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        initialRouteName="Startup"
        screenOptions={{ headerShown: false }}
      >
        <AppStack.Screen name="Startup" component={StartupScreen} />
        <AppStack.Screen name={constant.AUTH} component={AuthNavigation} />
        <AppStack.Screen name={constant.SHOP} component={ShopNavigation} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
