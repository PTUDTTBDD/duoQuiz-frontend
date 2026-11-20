import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./ReviewCompletedPage.styles";

export function ReviewCompletedPage() {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Hoàn thành phiên ôn"
        description="Tổng kết số câu vừa ôn và tùy chỉnh lịch nhắc cục bộ tối đa 1 lần/ngày (F5)."
      />
    </View>
  );
}

