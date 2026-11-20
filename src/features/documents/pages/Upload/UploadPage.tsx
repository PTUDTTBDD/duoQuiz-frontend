import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./UploadPage.styles";

export function UploadPage() {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Tải lên slide PDF"
        description="Chọn tệp PDF tối đa 25 MB, 150 trang và upload trực tiếp lên Object Storage (F1)."
      />
    </View>
  );
}

