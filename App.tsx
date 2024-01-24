import HoddyUI, { SafeAreaView } from "@hoddy-ui/core";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import WebView from "react-native-webview";
export default function App() {
  HoddyUI.initialize({
    colors: {
      light: {
        primary: {
          main: "#0d6efd",
          light: "#9261DB",
          dark: "#BF12B8",
        },
        secondary: {
          main: "#0dcaf0",
          light: "#fa0",
          dark: "#f80",
        },
      },
    },
  });

  return (
    <SafeAreaView>
      <WebView
        source={{ uri: "https://gbp.zingerpay.net/" }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
