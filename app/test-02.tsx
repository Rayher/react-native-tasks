import { StyleSheet, View } from "react-native";
import { Test02 } from "../components/test-02";

export default function Page() {
  return (
    <View style={styles.container}>
      <Test02 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",    
    padding: 24,
  }
});
