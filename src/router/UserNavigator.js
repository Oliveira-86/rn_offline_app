import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import constant from "../constants/navigatorStrings";


const UserStack = createNativeStackNavigator();

export const UserNavigation = () => {
  return (
    <UserStack.Navigator screenOptions={EditProductScreenOptions}>
     
    </UserStack.Navigator>
  );
};
