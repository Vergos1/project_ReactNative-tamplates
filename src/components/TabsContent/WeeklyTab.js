import {Text, TextInput, View} from "react-native";
import {GlobalStyles} from "../../styles/styles";
import {useState} from "react";
import CustomButton from "../CustomButton";

export default function WeeklyTab() {
    const [text, onChangeText] = useState('');

    return (
        <View>
            <View style={{gap: 17}}>
                <Text style={GlobalStyles.titleBlockLarge}>Weekly Riddles</Text>
                <Text style={GlobalStyles.tabsDescription}>
                    I can add to several hundred. But can’t subtract
                    multiply or divide.
                    Whatever I add to, it’s always in front of you but never behind. And the number I add to You can’t
                    really hide!
                </Text>
            </View>
            <View style={{marginTop: 24, gap: 24}}>
                <Text style={GlobalStyles.tabsLabel}>
                    Who am I?
                </Text>
                <TextInput
                    style={GlobalStyles.tabsInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Your answer"
                />
                <View style={{gap: 20}}>
                    <CustomButton
                        TextStyles={GlobalStyles.buttonSubmitText}
                        ButtonStyles={GlobalStyles.buttonSubmit}
                        title="Submit"
                    />
                    <Text style={GlobalStyles.tabsButtonDescription}>
                        5 attempts remaining
                    </Text>
                </View>

            </View>
        </View>
    )
}