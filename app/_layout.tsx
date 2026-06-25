import "@/global.css";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    //we are using a usefont hook from expo font. we pass to it an object where keys(-regular, -bold etc) are the names of the fonts you want to use & the values are actual font files. it return a boolean variable that tells us whether the fonts are loaded or not.
    "sans-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "sans-extrabold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "sans-light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
  });

  useEffect(() => {
    //the useeffect watches that boolean & once fonts are loaded it calls the SplashScreen.hideAsync() method to hide the splash screen. This ensures that the app only renders its content once the custom fonts are ready, preventing any flash of unstyled text.
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen when fonts are loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Render nothing while fonts are loading
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}
