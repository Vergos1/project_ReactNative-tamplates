import {Text, TouchableOpacity} from 'react-native';
import {GlobalStyles} from "../styles/styles";
import {useNavigation} from "@react-navigation/native";


export default function SectionBlockWrapper({children, link, isLarge}) {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate(link);
    };

    return (
        <TouchableOpacity style={isLarge ? GlobalStyles.sectionBlockLarge : GlobalStyles.sectionBlockSmall} onPress={handlePress}>
            {children}
        </TouchableOpacity>
    );
}
