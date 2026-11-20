import { useLocalSearchParams } from "expo-router";
import { DocumentStatusPage } from "@/features/documents/pages/DocumentStatus/DocumentStatusPage";

export default function DocumentStatusRoute() {
  const { documentId } = useLocalSearchParams<{ documentId: string }>();
  return <DocumentStatusPage documentId={documentId ?? ""} />;
}

