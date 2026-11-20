import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./ReviewOverviewPage.styles";

export function ReviewOverviewPage() {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Ôn tập câu sai (Leitner)"
        description="Thống kê 4 hộp Leitner (1/3/7/14 ngày) và danh sách câu đến hạn ôn (F4)."
      />
    </View>
  );
}

