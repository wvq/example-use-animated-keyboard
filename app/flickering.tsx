import { Button, StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function FlickeringScreen() {
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.inputContainer, { paddingBottom: bottom }]}>
        <Button title="this is a button" />
        <Button title="this is a button" />
        <Button title="this is a button" />
        <Button title="this is a button" />
        <Button title="this is a button" />
        <Button title="this is a button" />
        <Button title="this is a button" />
        <Button title="this is a button" />
        <Button title="this is a button" />
        <Button title="this is a button" />
        <Button title="this is a button" />
        <Button title="this is a button" />
        <Button title="this is a button" />
        <Button title="this is a button" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: "auto",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  input: {
    width: "100%",
    height: 40,
  },
});
