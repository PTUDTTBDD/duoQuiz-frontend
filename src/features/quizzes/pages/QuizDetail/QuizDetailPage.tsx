import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./QuizDetailPage.styles";

export function QuizDetailPage({ quizId }: { quizId: string }) {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Chi tiết bộ Quiz"
        description="Chọn chế độ làm bài: Hiển thị đáp án ngay sau mỗi câu hoặc Review sau khi nộp toàn bài (F2)."
        meta={`quizId: ${quizId}`}
      />
    </View>
  );
}

