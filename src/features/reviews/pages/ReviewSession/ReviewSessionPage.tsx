import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./ReviewSessionPage.styles";

export function ReviewSessionPage() {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Phiên ôn tập câu sai"
        description="Làm lại các câu đến hạn và tự động cập nhật hộp Leitner 1–4."
      />
    </View>
  );
}

