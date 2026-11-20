import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./ForgotPasswordPage.styles";

export function ForgotPasswordPage() {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Quên mật khẩu (OTP)"
        description="Nhập email để nhận mã OTP 6 chữ số đặt lại mật khẩu (F13)."
      />
    </View>
  );
}

