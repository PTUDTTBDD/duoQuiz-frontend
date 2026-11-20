import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { queryClient } from "@/api/query-client";

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </PaperProvider>
    </QueryClientProvider>
  );
}

