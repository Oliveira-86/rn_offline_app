import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import constant from "../constants/navigatorStrings";
import Auth from "../screens/User/Auth";


const AuthStack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={constant.AUTH_SCREEN} component={Auth} />
    </AuthStack.Navigator>
  );
};
