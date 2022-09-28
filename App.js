import "react-native-gesture-handler";
import { LogBox, View } from "react-native";
import RootNavigator from "./Src/Routes";
import { Provider } from "redux";
import { store } from "./Src/Redux/Store";
import { useFonts } from "expo-font";

LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();

export default function App() {
  const [loaded] = useFonts({
    regular: require("./Assets/Fonts/Poppins-Regular.ttf"),
    bold: require("./Assets/Fonts/Poppins-Bold.ttf"),
    light: require("./Assets/Fonts/Poppins-Light.ttf"),
    semiBold: require("./Assets/Fonts/Poppins-SemiBold.ttf"),

  });

  if (!loaded) return <View />;

  return (
    //  <Provider store={store}>
    <RootNavigator />
    //  </Provider>
  );
}
