import {Pressable, Text} from "react-native";
import {GlobalStyles} from "../styles/styles";

export default function CustomButton({title, onPress, ButtonStyles, TextStyles}) {
    return (
        <Pressable style={ButtonStyles} onPress={onPress}>
            <Text style={TextStyles}>{title}</Text>
        </Pressable>
    )
}