import { Pressable, PressableProps, Text } from "react-native";
import { styles } from "./style";

type ButtonProps = PressableProps & {
    title: string,
};

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed
                ]}
                accessibilityRole="button"
                {...rest}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </Pressable>
        </>
    );
}