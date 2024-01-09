import React, { useState } from "react";
import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import Button from "../components/Button";
const placeHolderImage = require("./../assets/images/background-image.png");
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import CircleButton from "../components/CircleButton";
import IconButton from "../components/IconButton";
import EmojiPicker from "../components/EmojiPicker";
import EmojiList from "../components/EmojiList";
import EmojiSticker from "../components/EmojiSticker";

export default function HomeScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(placeHolderImage);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (result.canceled) {
      alert("please select an image!");
    } else {
      setSelectedImage({ uri: result.assets[0].uri });
      setShowAppOptions(true);
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={selectedImage}></Image>
        {selectedEmoji && (
          <EmojiSticker stickerSource={selectedEmoji} imageSize={40} />
        )}
      </View>

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footer}>
          <Button
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          ></Button>
          <Button label="Use this photo"></Button>
        </View>
      )}
      <EmojiPicker onClose={onModalClose} isVisible={isModalVisible}>
        <EmojiList
          onCloseModal={onModalClose}
          onSelect={setSelectedEmoji}
        ></EmojiList>
      </EmojiPicker>
      <StatusBar />
    </GestureHandlerRootView>
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
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
