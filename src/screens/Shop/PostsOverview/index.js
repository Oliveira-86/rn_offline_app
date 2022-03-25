import React, { useEffect } from "react";
import { Alert, ActivityIndicator } from "react-native";
import { Container, List, Loading, Centered, IconBack } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, deleteUserPost } from "../../../features/posts/posts-thunk";
import { MaterialIcons } from "@expo/vector-icons";
import ProductItem from "../../../components/Shop/ProdutItem";

import Button from "../../../components/UI/Button";
import theme from "../../../styles/theme";

import { useNavigation } from "@react-navigation/native";
import constant from "../../../constants/navigatorStrings";

const ProductOverview = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { posts, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const deleteHandler = (id) => {
    console.log('click')  
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      {
        text: 'No', 
        style: 'default'
      },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(deleteUserPost(id))
        }
      }
    ]);
  };

  if (loading) return <Centered><ActivityIndicator size="large" color={theme.colors.secondary} /></Centered>;

  return (
    <Container>
      <Loading>My Posts</Loading>
      <List
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return (
            <ProductItem
              description={itemData.item.description}
              onEdit={() => {
                navigation.navigate(constant.USER_EDIT, { postId: itemData.item.id });
              }}
              onDelete={deleteHandler.bind(this, itemData.item.id)}
            />
          );
        }}
      />
      <Button
      large
        label="Create Product"
        onPress={() => {
          navigation.navigate(constant.USER_EDIT);
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
    headerLeft: () => {
      const navigation = useNavigation();

      return (
        <IconBack
          onPress={() => {
            navigation.navigate(constant.SHOP_POSTS_OVERVIEW);
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
        </IconBack>
      );
    },
  };
};
