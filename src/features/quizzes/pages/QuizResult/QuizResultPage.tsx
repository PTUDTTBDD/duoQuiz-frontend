import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./QuizResultPage.styles";

export function QuizResultPage({ quizId }: { quizId: string }) {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Kết quả & Review Quiz"
        description="Xem điểm tổng quan, review từng câu, chủ động bấm 'Mở nguồn' (cả câu đúng & sai) hoặc báo sai (F6, F9)."
        meta={`quizId: ${quizId}`}
      />
    </View>
  );
}

