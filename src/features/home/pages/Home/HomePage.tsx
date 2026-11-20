import { View } from "react-native";
import { ScreenPlaceholder } from "@/components/ui/ScreenPlaceholder/ScreenPlaceholder";
import { styles } from "./HomePage.styles";

export function HomePage() {
  return (
    <View style={styles.wrapper}>
      <ScreenPlaceholder
        title="DuoQuiz"
        description="Biết mình hổng chỗ nào trước khi quá muộn. Tổng quan phiên ôn 5 phút và tài liệu gần đây."
      />
    </View>
  );
}

