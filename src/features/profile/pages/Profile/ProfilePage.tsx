import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./ProfilePage.styles";

export function ProfilePage() {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Tài khoản & Nhắc ôn"
        description="Quản lý tài khoản, chọn giờ nhắc ôn cục bộ (mặc định 20:00) hoặc tắt thông báo (F5, F13)."
      />
    </View>
  );
}

