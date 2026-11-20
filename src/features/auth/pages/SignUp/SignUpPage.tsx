import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./SignUpPage.styles";

export function SignUpPage() {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Đăng ký tài khoản"
        description="Tạo tài khoản bằng Email hoặc Google để đồng bộ môn học và lịch ôn tập."
      />
    </View>
  );
}

