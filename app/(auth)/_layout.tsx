//every screen inside of the auth now shares this layout

import "@/global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
