import React, { useEffect } from "react";
import { Container, List, Loading, Header } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../../features/products/products-thunk";
import ProductItem from "../../../components/Shop/ProdutItem";

import Button from "../../../components/UI/Button";
import theme from "../../../styles/theme";

import { useNavigation } from "@react-navigation/native";
import constant from "../../../constants/navigatorStrings";

const ProductOverview = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading) return <Loading>Loading...</Loading>;

  return (
    <Container>
      {/* <List
        data={availableProducts}
        keyExtractor={(item) => item.id}
      /> */}
      <Loading>Hello expo</Loading>
      <Button
        label="Create Product"
        onPress={() => {
          navigation.navigate(constant.USER);
        }}
      />
    </Container>
  );
};

export default ProductOverview;

export const screenOptions = () => {
  return {
    headerTitle: "All Products",
    headerStyle: { backgroundColor: theme.colors.secondary },
    headerTitleStyle: {
      color: theme.colors.white,
      fontFamily: theme.fonts.bold,
    },
  };
};
