import {Text, TextInput, View} from "react-native";
import {useState} from "react";
import {GlobalStyles} from "../../styles/styles";
import CustomButton from "../CustomButton";


export default function OneDayTab() {
    const [text, onChangeText] = useState('');

    return(
        <View>
            <View style={{gap: 17}}>
                <Text style={GlobalStyles.titleBlockLarge}>One day</Text>
                <Text style={GlobalStyles.tabsDescription}>
                    I can add to several hundred. But can’t subtract . to several hundred. But can’t subtract
                    multiply or divide.
                </Text>
            </View>
            <View style={{marginTop: 24, gap: 24}}>
                <Text style={GlobalStyles.tabsLabel}>
                    Write anything PLEASE!
                </Text>
                <TextInput
                    style={GlobalStyles.tabsInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Writing please"
                />
                <View style={{gap: 20}}>
                    <CustomButton
                        TextStyles={GlobalStyles.buttonSubmitText}
                        ButtonStyles={GlobalStyles.buttonSubmit}
                        title="Submit"
                    />
                    <Text style={GlobalStyles.tabsButtonDescription}>
                        Promt text placeholder
                    </Text>
                </View>

            </View>
        </View>
    )
}