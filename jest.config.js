module.exports = {
  preset: "jest-expo",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(\\.pnpm/)?((jest-)?react-native|@react-native|@react-native-community|expo|@expo|@expo-google-fonts|react-navigation|@react-navigation|react-native-paper|react-native-svg|react-native-reanimated|react-native-gesture-handler|@testing-library/react-native))",
  ],
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
};
