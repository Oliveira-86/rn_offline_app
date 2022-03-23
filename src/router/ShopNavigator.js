import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import constant from "../constants/navigatorStrings";
import ProductOverview, {
    screenOptions as ProductOverviewScreenOptions
} from '../screens/Shop/ProductOverview';

const ShopStack = createNativeStackNavigator();

export const ShopNavigation = () => {
  return (
    <ShopStack.Navigator screenOptions={ProductOverviewScreenOptions}>
      <ShopStack.Screen
        name={constant.SHOP_PRODUCTS_OVERVIEW}
        component={ProductOverview}
      />
    </ShopStack.Navigator>
  );
};
