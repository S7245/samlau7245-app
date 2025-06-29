import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
    // <Stack>
    //     <Stack.Screen
    //         name="index"
    //         options={{
    //             title: "Home",
    //             headerStyle: { backgroundColor: "#25292e" },
    //             headerTintColor: "#fff",
    //         }}
    //     />
    //     <Stack.Screen
    //         name="about"
    //         options={{
    //             title: "About",
    //             headerStyle: { backgroundColor: "#25292e" },
    //             headerTintColor: "#fff",
    //         }}
    //     />
    // </Stack>
  );
}
