import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./FlagQuestionPage.styles";

export function FlagQuestionPage({ questionId }: { questionId: string }) {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Báo cáo câu hỏi sai"
        description="Chọn lý do và ghi chú để nhóm phát triển kiểm tra chất lượng câu hỏi AI (F9)."
        meta={`questionId: ${questionId}`}
      />
    </View>
  );
}

