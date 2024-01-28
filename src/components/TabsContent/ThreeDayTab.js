import {Text, TextInput, View} from "react-native";
import {useState} from "react";
import {GlobalStyles} from "../../styles/styles";
import CustomButton from "../CustomButton";


export default function ThreeDayTab() {
    const [text, onChangeText] = useState('');

    return(
        <View>
            <View style={{gap: 17}}>
                <Text style={GlobalStyles.titleBlockLarge}>Three Day Tab</Text>
                <Text style={GlobalStyles.tabsDescription}>
                    I can add to several hundred. But can’t subtract
                    multiply or divide. add to several hundred. But can’t subtract.
                </Text>
            </View>
            <View style={{marginTop: 24, gap: 24}}>
                <Text style={GlobalStyles.tabsLabel}>
                    Write please!
                </Text>
                <TextInput
                    style={GlobalStyles.tabsInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Your text"
                />
                <View style={{gap: 20}}>
                    <CustomButton
                        TextStyles={GlobalStyles.buttonSubmitText}
                        ButtonStyles={GlobalStyles.buttonSubmit}
                        title="Submit"
                    />
                    <Text style={GlobalStyles.tabsButtonDescription}>
                        Placeholder Text
                    </Text>
                </View>

            </View>
        </View>
    )
}