import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Test01 } from "../components/test-01";

export default function Page() {
  return (    
      <View style={styles.container}>
        <Test01 />      
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
