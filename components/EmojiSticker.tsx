import { Image } from "expo-image";
import { ImageSourcePropType, View } from "react-native";

type Props = {
  source: ImageSourcePropType;
  imageSize?: number;
};

export default function EmojiSticker({ source, imageSize }: Props) {
  return (
    <View style={{ top: -350 }}>
      <Image source={source} style={{ width: imageSize, height: imageSize }} />
    </View>
  );
}
