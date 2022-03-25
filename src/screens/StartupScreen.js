import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch } from "react-redux";

import styled from "styled-components/native";
import theme from "../styles/theme";
import constant from "../constants/navigatorStrings";
import { authenticate } from "../features/auth/auth-slice";
import { useNavigation } from "@react-navigation/native";

const StartupScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");

      if (!userData) {
        navigation.navigate(constant.AUTH);
        return;
      }

      const transformedData = JSON.parse(userData);
      const { token, userId, expiryDate } = transformedData;
      const expirationDate = new Date(expiryDate);

      if (expirationDate <= new Date() || !token || !userId) {
        navigation.navigate(constant.AUTH);
        return;
      }
      const formData = {
        token: token,
        userId: userId,
      };

      navigation.navigate(constant.SHOP);
      dispatch(authenticate(formData));
    };

    tryLogin();
  }, []);
  return (
    <Container>
      <ActivityIndicator size="large" color={theme.colors.secondary} />
    </Container>
  );
};

export default StartupScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
