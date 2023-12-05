import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello</Text>        
        <Text style={styles.subtitle}>Welcome to main page</Text>
        <br />
        <Text style={styles.menuTitle}>Menu</Text>
        <Link href="test-01">
          <Text style={styles.menuItem}>Task 01</Text>
        </Link>
        <Link href="test-02">
          <Text style={styles.menuItem}>Task 02</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  menuTitle: {
    fontSize: 27,
    fontWeight: "700"
  },
  menuItem: {
    fontSize: 25,
    textDecorationLine: "underline"
  }
});