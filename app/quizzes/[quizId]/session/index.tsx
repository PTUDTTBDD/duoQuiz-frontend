import { useLocalSearchParams } from "expo-router";
import { QuizSessionPage } from "@/features/quizzes/pages/QuizSession/QuizSessionPage";

export default function QuizSessionRoute() {
  const { quizId } = useLocalSearchParams<{ quizId: string }>();
  return <QuizSessionPage quizId={quizId ?? ""} />;
}

