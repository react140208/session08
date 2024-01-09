import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Button from "../components/Button";
const placeHolderImage = require("./../assets/images/background-image.png");
import * as ImagePicker from "expo-image-picker";

export default function HomeScreen() {
  const [selectedImage, setSelectedImage] = useState(placeHolderImage);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (result.canceled) {
      alert("please select an image!");
    } else {
      setSelectedImage({ uri: result.assets[0].uri });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={selectedImage}></Image>
      </View>
      <View style={styles.footer}>
        <Button
          label="Choose a photo"
          theme="primary"
          onPress={pickImageAsync}
        ></Button>
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
