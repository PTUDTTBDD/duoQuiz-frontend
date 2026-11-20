import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home/index" options={{ title: "Trang chủ" }} />
      <Tabs.Screen name="subjects/index" options={{ title: "Môn học" }} />
      <Tabs.Screen name="review/index" options={{ title: "Ôn tập" }} />
      <Tabs.Screen name="profile/index" options={{ title: "Tài khoản" }} />
    </Tabs>
  );
}

