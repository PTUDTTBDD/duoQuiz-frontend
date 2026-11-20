import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./CreateSubjectPage.styles";

export function CreateSubjectPage() {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Tạo môn học mới"
        description="Tạo môn học để nhóm tài liệu PDF và bộ câu hỏi trắc nghiệm."
      />
    </View>
  );
}

