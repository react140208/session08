import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/Button";
const placeHolderImage = require("./../assets/images/background-image.png");

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={placeHolderImage}></Image>
      </View>
      <View style={styles.footer}>
        <Button label="Choose a photo"></Button>
        <Button label="Use this photo"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 50,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 20,
  },
  footer: {
    flex: 1 / 3,
  },
});
