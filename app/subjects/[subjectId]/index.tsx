import { useLocalSearchParams } from "expo-router";
import { SubjectDetailPage } from "@/features/subjects/pages/SubjectDetail/SubjectDetailPage";

export default function SubjectDetailRoute() {
  const { subjectId } = useLocalSearchParams<{ subjectId: string }>();
  return <SubjectDetailPage subjectId={subjectId ?? ""} />;
}

