import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./DocumentStatusPage.styles";

export function DocumentStatusPage({ documentId }: { documentId: string }) {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Tiến độ xử lý PDF"
        description="Theo dõi trạng thái xử lý bất đồng bộ và danh sách trang bị bỏ qua (skippedPages)."
        meta={`documentId: ${documentId}`}
      />
    </View>
  );
}

