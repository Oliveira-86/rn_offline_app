import React, { useEffect } from "react";
import { Container, List, Loading, Header } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../../features/posts/posts-thunk";
import ProductItem from "../../../components/Shop/ProdutItem";

import Button from "../../../components/UI/Button";
import theme from "../../../styles/theme";

import { useNavigation } from "@react-navigation/native";
import constant from "../../../constants/navigatorStrings";

const ProductOverview = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { posts, loading } = useSelector((state) => state.posts);

  console.log("aqui", posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const editProductHandler = (id) => {
    console.log(id)
    
  };

  if (loading) return <Loading>Loading...</Loading>;

  return (
    <Container>
      <Loading>My Posts</Loading>
      <List
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          console.log("itemData", itemData.item.id);
          return (
            <ProductItem
              description={itemData.item.description}
              onEdit={() => {
                navigation.navigate(constant.USER_EDIT, { postId: itemData.item.id });
              }}
            />
          );
        }}
      />
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
