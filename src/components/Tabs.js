import {Button, View} from "react-native";
import {GlobalStyles} from "../styles/styles";
import CustomButton from "./CustomButton";
import {useState} from "react";

const TabsData = [
    "Weekly",
    "3 days",
    "1 day",
    "Special"
]
export default function Tabs({setSelectedTab, selectedTab}) {

    return (
        <View style={GlobalStyles.tabsWrapper}>
            {TabsData.map((tab, index) => (
                <CustomButton
                    key={index}
                    title={tab}
                    ButtonStyles={selectedTab === index ? GlobalStyles.tabActive : GlobalStyles.tabButton}
                    TextStyles={selectedTab === index ? GlobalStyles.tabActiveText : GlobalStyles.tabButtonText}
                    onPress={() => setSelectedTab(index)}
                />
            ))}
        </View>
    )
}