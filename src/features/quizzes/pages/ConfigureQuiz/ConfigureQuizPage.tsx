import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./ConfigureQuizPage.styles";

export function ConfigureQuizPage() {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Tạo bộ Quiz"
        description="Chọn tài liệu PDF nguồn và số lượng câu hỏi (1–25, mặc định 10) cho phiên ôn 5 phút (F14)."
      />
    </View>
  );
}

