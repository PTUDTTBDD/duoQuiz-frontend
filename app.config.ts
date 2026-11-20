import type { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "DuoQuiz",
  slug: "duoquiz",
  version: "0.1.0",
  scheme: process.env.EXPO_PUBLIC_APP_SCHEME ?? "duoquiz",
  orientation: "portrait",
  userInterfaceStyle: "light",
  plugins: [
    "expo-router",
    "expo-secure-store",
    [
      "expo-notifications",
      {
        color: "#2563EB"
      }
    ]
  ],
  android: {
    package: "com.ptudttbdd.duoquiz",
    adaptiveIcon: {
      backgroundColor: "#2563EB"
    }
  },
  ios: {
    bundleIdentifier: "com.ptudttbdd.duoquiz",
    supportsTablet: true
  },
  experiments: {
    typedRoutes: true
  }
};

export default config;

