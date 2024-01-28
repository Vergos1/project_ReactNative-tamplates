import {Text, TextInput, View} from "react-native";
import {useState} from "react";
import {GlobalStyles} from "../../styles/styles";
import CustomButton from "../CustomButton";


export default function SpecialTab() {
    const [text, onChangeText] = useState('');

    return(
        <View>
            <View style={{gap: 17}}>
                <Text style={GlobalStyles.titleBlockLarge}>Special</Text>
                <Text style={GlobalStyles.tabsDescription}>
                    I can add to several hundred. But can’t subtract
                    multiply or divide.
                </Text>
            </View>
            <View style={{marginTop: 24, gap: 24}}>
                <Text style={GlobalStyles.tabsLabel}>
                    Write anything!
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