import { Text, View } from "react-native";
import { styles } from "./ScreenPlaceholder.styles";

interface ScreenPlaceholderProps {
  title: string;
  description: string;
  meta?: string;
}

export function ScreenPlaceholder({ title, description, meta }: ScreenPlaceholderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{description}</Text>
        {meta ? <Text style={styles.subtitle}>{meta}</Text> : null}
      </View>
    </View>
  );
}

