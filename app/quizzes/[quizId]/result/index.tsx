import { useLocalSearchParams } from "expo-router";
import { QuizResultPage } from "@/features/quizzes/pages/QuizResult/QuizResultPage";

export default function QuizResultRoute() {
  const { quizId } = useLocalSearchParams<{ quizId: string }>();
  return <QuizResultPage quizId={quizId ?? ""} />;
}

