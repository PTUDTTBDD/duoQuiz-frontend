import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./DocumentDetailPage.styles";

export function DocumentDetailPage({ documentId }: { documentId: string }) {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Chi tiết tài liệu"
        description="Thông tin số trang và các trang ít chữ bị bỏ qua."
        meta={`documentId: ${documentId}`}
      />
    </View>
  );
}

