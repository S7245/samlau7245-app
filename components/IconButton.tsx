import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, StyleSheet, Text } from "react-native";

type CircleButtonProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress?: () => void;
};

export default function IconButton({
  icon,
  label,
  onPress,
}: CircleButtonProps) {
  return (
      <Pressable style={styles.iconButton} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color="#fff" />
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
