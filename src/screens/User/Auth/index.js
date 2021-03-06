import {
  LinearGradientContainer,
  Card,
  ButtonContainer,
  Loading,
} from "./styles";
import React, { useState } from "react";
import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";
import theme from "../../../styles/theme";
import { useDispatch } from "react-redux";
import { loginPost, signupPost } from "../../../features/auth/auth-thunk";
import { ActivityIndicator, Keyboard, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import constant from "../../../constants/navigatorStrings";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [emailValue, setEmailValue] = useState();
  const [passwordValue, setPasswordValue] = useState();

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onHandleSignInUp = () => {
    if (!emailValue || !passwordValue) {
      setError(true);
      setErrorPassword(true);
      return;
    }

    if (passwordValue.length < 6) {
      setErrorPassword(true);
      return;
    }

    const formData = {
      email: emailValue,
      password: passwordValue,
      returnSecureToken: true,
    };
    
    setIsLoading(true);
    try {
      if (isSignup) {
        dispatch(signupPost(formData));
        setIsLoading(false);
        navigation.navigate(constant.SHOP);
      } else {
        dispatch(loginPost(formData));
        setIsLoading(false);
        navigation.navigate(constant.SHOP);
      }
    } catch (error) {
      console.log(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <LinearGradientContainer>
      <Pressable onPress={Keyboard.dismiss}>
        <Card>
          <Input
            label="E-Mail"
            small
            error={error}
            errorText="Please enter a valid email address."
            onChangeText={(text) => setEmailValue(text)}
            value={emailValue}
          />
          <Input
            label="Password"
            small
            error={errorPassword}
            errorText="Please enter at least 6 characters for password."
            onChangeText={(text) => setPasswordValue(text)}
            value={passwordValue}
          />
          <ButtonContainer up>
            <Button
              label={isSignup ? "Sign Up" : "Login"}
              onPress={onHandleSignInUp}
            />
            {isLoading && (
              <Loading>
                <ActivityIndicator size="small" color={theme.colors.white} />
              </Loading>
            )}
          </ButtonContainer>
          <ButtonContainer>
            <Button
              variant="outlinedSecondary"
              label={`Switch to ${isSignup ? "Login" : "Sign Up"}`}
              onPress={() => {
                setIsSignup((prevState) => !prevState);
              }}
            />
          </ButtonContainer>
        </Card>
      </Pressable>
    </LinearGradientContainer>
  );
};

export default Auth;
