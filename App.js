import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import theme from "./src/styles/theme";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import ProductOverview from "./src/screens/Shop/ProductOverview";

import { store } from "./src/features/store";
import { Provider } from "react-redux";
import EditProductScreen from './src/screens/User/EditProduct';

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <EditProductScreen />
          <StatusBar style="auto" />
        </ThemeProvider>
      </Provider>
    </>
  );
}
