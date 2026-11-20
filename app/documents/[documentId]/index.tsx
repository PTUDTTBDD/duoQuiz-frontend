import { useLocalSearchParams } from "expo-router";
import { DocumentDetailPage } from "@/features/documents/pages/DocumentDetail/DocumentDetailPage";

export default function DocumentDetailRoute() {
  const { documentId } = useLocalSearchParams<{ documentId: string }>();
  return <DocumentDetailPage documentId={documentId ?? ""} />;
}

