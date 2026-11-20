import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./SignInPage.styles";

export function SignInPage() {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Đăng nhập DuoQuiz"
        description="Hỗ trợ Email/Password và Google Sign-In (F13)."
      />
    </View>
  );
}

