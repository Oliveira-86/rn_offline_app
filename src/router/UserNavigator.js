import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import constant from "../constants/navigatorStrings";

import EditProductScreen, {
  screenOptions as EditProductScreenOptions,
} from "../screens/User/EditProduct";

const UserStack = createNativeStackNavigator();

export const UserNavigation = () => {
  return (
    <UserStack.Navigator screenOptions={EditProductScreenOptions}>
      <UserStack.Screen
        name={constant.USER_EDIT}
        component={EditProductScreen}
      />
    </UserStack.Navigator>
  );
};
