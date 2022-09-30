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
    lovers: require("./Assets/Fonts/LoversQuarrel-Regular.ttf"),
    inter: require("./Assets/Fonts/Inter-VariableFont_slnt.ttf"),
    mediun:require("./Assets/Fonts/Inter_Medium.otf"),
  });

  if (!loaded) return <View />;

  return (
    //  <Provider store={store}>
    <RootNavigator />
    //  </Provider>
  );
}
