import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./QuizSessionPage.styles";

export function QuizSessionPage({ quizId }: { quizId: string }) {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Làm bài Quiz"
        description="Trả lời câu hỏi trắc nghiệm 4 lựa chọn theo chế độ đã chọn."
        meta={`quizId: ${quizId}`}
      />
    </View>
  );
}

