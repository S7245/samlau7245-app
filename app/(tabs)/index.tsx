import { ImageSourcePropType, StyleSheet, View } from "react-native";

import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";

import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("@/assets/images/background-image.png"); // Adjust the path as necessary

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const resetImage = () => {
    setShowAppOptions(false);
  };

  const saveImage = () => {
    // Implement save functionality here
  };

  const onAddEmoji = () => {
    setIsModalVisible(true);
  };

  const onAddEmojiClose = () => {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} source={pickedEmoji}></EmojiSticker>
        )}
      </View>

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon={"refresh"} label="Reset" onPress={resetImage}></IconButton>
            <CircleButton onPress={onAddEmoji}/>
            <IconButton icon={"save-alt"} label="Save" onPress={saveImage}></IconButton>
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onAddEmojiClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onAddEmojiClose}/>
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
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
