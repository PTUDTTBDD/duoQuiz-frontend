import { useLocalSearchParams } from "expo-router";
import { FlagQuestionPage } from "@/features/flags/pages/FlagQuestion/FlagQuestionPage";

export default function FlagQuestionRoute() {
  const { questionId } = useLocalSearchParams<{ questionId: string }>();
  return <FlagQuestionPage questionId={questionId ?? ""} />;
}

