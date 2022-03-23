import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import constant from "../constants/navigatorStrings";
import { ShopNavigation } from "./ShopNavigator";
import { UserNavigation } from "./UserNavigator";

const AppStack = createNativeStackNavigator();


import EditProductScreen, {
  screenOptions as EditProductScreenOptions,
} from "../screens/User/EditProduct";

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
