import React, { useState } from "react";
import { Container, Title, IconBack } from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import Input from "../../components/UI/Input";

import theme from "../../styles/theme";

import { useNavigation } from "@react-navigation/native";
import { Keyboard } from "react-native";
import Button from "./../../components/UI/Button/index";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updateUserPost } from "../../features/posts/posts-thunk";

const EditProductScreen = ({ route }) => {
  const [value, onChangeText] = useState("");
  const [error, setError] = useState(false);

  const { postId } = route.params ? route.params : "";

  if (postId) {
    const { posts, loading } = useSelector((state) => state.posts);

    const editPost = posts.find((post) => post.id === postId);
  }

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (!value) {
      setError(true);
      return;
    }

    const obj = {
      ownerId: "u2",
      description: value,
    };

    const updateObj = {
      id: postId,
      ownerId: "u2",
      description: value,
    };

    try {
      if (postId) {
        dispatch(updateUserPost(updateObj));
      } else {
        dispatch(createPost(obj));
      }
    } catch (error) {}
  };

  return (
    <Container onPress={Keyboard.dismiss}>
      <Title>Create Post</Title>
      <Input
        label="Message"
        value={value}
        onChangeText={(text) => {
          onChangeText(text);
        }}
        error={error}
      />
      <Button label="send product" onPress={onSubmit} />
    </Container>
  );
};

export default EditProductScreen;

export const screenOptions = () => {
  return {
    headerTitle: "Create Product",
    headerStyle: {
      backgroundColor: theme.colors.secondary,
      alignItems: "center",
    },
    headerTitleStyle: {
      color: theme.colors.white,
      fontFamily: theme.fonts.bold,
    },
    headerLeft: () => {
      const navigation = useNavigation();

      return (
        <IconBack
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
        </IconBack>
      );
    },
  };
};
