import {useState} from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Svg, {Path} from "react-native-svg";
import {useNavigation} from "@react-navigation/native";
import {GlobalStyles} from "../styles/styles";
import ButtonBackground from "../assets/images/button-background.jpg";
import {NotificationIcon, PromptIcon, StarIcon} from "./icons/HeaderIcons";


const CustomHeader = () => {
    const [count, setCount] = useState(954);
    const navigation = useNavigation();

    const handleLikePress = () => {
        setCount(count + 1);
    };

    return (
        <View style={GlobalStyles.headerContainer}>
            <View style={GlobalStyles.header}>
                <TouchableOpacity style={GlobalStyles.button} onPress={handleLikePress}>
                    <ImageBackground
                        source={ButtonBackground}
                        style={GlobalStyles.imageBackground}
                    >
                        <StarIcon/>
                        <Text style={GlobalStyles.buttonCount}>{count}</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <View style={GlobalStyles.buttonsContainer}>
                    <TouchableOpacity style={GlobalStyles.notificationButton}
                                      onPress={() => navigation.navigate('Home')}>
                        <View style={GlobalStyles.notificationCount}>
                            <Text style={GlobalStyles.countText}>
                                2
                            </Text>
                        </View>
                        <NotificationIcon/>
                    </TouchableOpacity>
                    <TouchableOpacity style={GlobalStyles.promptButton} onPress={() => navigation.navigate('Home')}>
                        <View style={GlobalStyles.promptCount}>
                            <Text style={GlobalStyles.countText}>
                                5
                            </Text>
                        </View>
                        <PromptIcon/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CustomHeader;
