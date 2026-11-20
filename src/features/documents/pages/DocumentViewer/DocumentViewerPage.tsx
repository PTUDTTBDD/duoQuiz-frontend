import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./DocumentViewerPage.styles";

interface DocumentViewerPageProps {
  documentId: string;
  initialPage: number;
}

export function DocumentViewerPage({ documentId, initialPage }: DocumentViewerPageProps) {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Trình xem trang slide nguồn"
        description="Hiển thị ảnh WebP độ phân giải cao, đóng khung SVG quanh bbox và tự động phóng to đoạn đáp án (F6, F7)."
        meta={`documentId: ${documentId} · page: ${initialPage}`}
      />
    </View>
  );
}

