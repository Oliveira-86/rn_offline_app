import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import AppNavigator from "./src/router/AppNavigator";

import { store } from "./src/features/store";
import { Provider } from "react-redux";

import AppLoading from "expo-app-loading";
import theme from "./src/styles/theme";
import { init } from "./src/helpers/db";

init()
  .then(() => {
    console.log("Initialized database.");
  })
  .catch((error) => {
    console.log("Initializing database failed");
    console.log(error);
  });

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" translucent />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppNavigator />
        </ThemeProvider>
      </Provider>
    </>
  );
}
