import React from "react";
import { Container, Title, IconBack } from "./styles";

import { MaterialIcons } from "@expo/vector-icons";
import Input from "../../components/UI/Input";

import theme from "../../styles/theme";

import { useNavigation } from "@react-navigation/native";

const EditProductScreen = (props) => {
  return (
    <Container>
      <Title>Create Post</Title>
      <Input label="Message" />
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
