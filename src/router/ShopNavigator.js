import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import constant from "../constants/navigatorStrings";

import PostsOverview, {
    screenOptions as PostsOverviewScreenOptions
} from '../screens/Shop/PostsOverview';


import EditProductScreen, {
  screenOptions as EditProductScreenOptions,
} from "../screens/User/EditPost";

const ShopStack = createNativeStackNavigator();

export const ShopNavigation = () => {
  return (
    <ShopStack.Navigator initialRouteName={constant.SHOP_POSTS_OVERVIEW}>
      <ShopStack.Screen
        name={constant.SHOP_POSTS_OVERVIEW}
        component={PostsOverview}
        options={PostsOverviewScreenOptions}
      />
       <ShopStack.Screen
        name={constant.USER_EDIT}
        component={EditProductScreen}
        options={EditProductScreenOptions}
      />
    </ShopStack.Navigator>
  );
};
