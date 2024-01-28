import {StatusBar} from 'expo-status-bar';
import {useState} from "react";
import {ScrollView, View} from 'react-native';
import {GlobalStyles} from "../styles/styles";
import Tabs from "../components/Tabs";
import OneDayTab from "../components/TabsContent/OneDayTab";
import WeeklyTab from "../components/TabsContent/WeeklyTab";
import ThreeDayTab from "../components/TabsContent/ThreeDayTab";
import SpecialTab from "../components/TabsContent/SpecialTab";


const TabsContentData = [
    <WeeklyTab/>,
    <ThreeDayTab/>,
    <OneDayTab/>,
    <SpecialTab/>
]
export default function WeeklyScreen() {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <ScrollView
            style={GlobalStyles.container}
            showsVerticalScrollIndicator={false}
        >
            <View
                style={{
                    gap: 20,
                    paddingLeft: 40,
                    paddingRight: 40,
                    paddingBottom: 250,
                }}
            >
                <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
                <View style={{marginTop: 20}}>
                    {TabsContentData[selectedTab]}
                </View>
                <StatusBar style="auto"/>
            </View>
        </ScrollView>
    );
}
