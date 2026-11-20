import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./SubjectsPage.styles";

export function SubjectsPage() {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Môn học"
        description="Quản lý danh sách môn học và slide PDF của bạn (F1)."
      />
    </View>
  );
}

