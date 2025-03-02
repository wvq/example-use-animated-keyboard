import { router } from "expo-router";
import { Button, StyleSheet, TextInput, View } from "react-native";
import Animated, {
  useAnimatedKeyboard,
  useAnimatedStyle,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainScreen() {
  const { height } = useAnimatedKeyboard();

  const style = useAnimatedStyle(() => {
    console.log(height.value);
    return {
      transform: [{ translateY: -height.value }],
    };
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animated.View style={[{ height: 200, marginTop: "auto" }, style]}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Enter text here" />
          <Button
            title="goto next page"
            onPress={() => router.navigate("/flickering")}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: "100%",
  },

  input: {
    width: "100%",
    height: 40,
  },
});
