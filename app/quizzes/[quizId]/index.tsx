import { useLocalSearchParams } from "expo-router";
import { QuizDetailPage } from "@/features/quizzes/pages/QuizDetail/QuizDetailPage";

export default function QuizDetailRoute() {
  const { quizId } = useLocalSearchParams<{ quizId: string }>();
  return <QuizDetailPage quizId={quizId ?? ""} />;
}

