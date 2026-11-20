import { useLocalSearchParams } from "expo-router";
import { DocumentViewerPage } from "@/features/documents/pages/DocumentViewer/DocumentViewerPage";

export default function DocumentViewerRoute() {
  const { documentId, page } = useLocalSearchParams<{ documentId: string; page?: string }>();
  const parsedPage = Number(page ?? 1);
  return (
    <DocumentViewerPage
      documentId={documentId ?? ""}
      initialPage={Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1}
    />
  );
}

