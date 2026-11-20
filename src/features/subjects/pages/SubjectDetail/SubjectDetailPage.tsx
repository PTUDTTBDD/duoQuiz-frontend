import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./SubjectDetailPage.styles";

interface SubjectDetailPageProps {
  subjectId: string;
}

export function SubjectDetailPage({ subjectId }: SubjectDetailPageProps) {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="Chi tiết môn học"
        description="Danh sách tài liệu PDF đã tải lên và tùy chọn tạo bộ quiz mới."
        meta={`subjectId: ${subjectId}`}
      />
    </View>
  );
}

