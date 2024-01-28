import {StatusBar} from 'expo-status-bar';
import {Image, ScrollView, Text, View} from 'react-native';
import {GlobalStyles} from "../styles/styles";
import SectionBlockWrapper from "../components/SectionBlockWrapper";
// image
import QuestionImage from "../assets/images/question-image.png";
import ThreeDaysImage from "../assets/images/three-days-image.png";
import OneDayImage from "../assets/images/one-day-image.png";
import BrandImage from "../assets/images/brand-image.png";
//logo
import NikeLogo from "../assets/images/nike-logo.png";
import MackLogo from "../assets/images/mack-logo.png";
import LegoLogo from "../assets/images/lego-logo.png";
// sprite
import QuestionSpriteImage from "../assets/images/question-background-sprite.png";
import OneDaySpriteImage from "../assets/images/day-background-sprite.png";
import ThreeDaysSpriteImage from "../assets/images/three-background-sprite.png";


export default function HomeScreen() {
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
                    paddingBottom: 180,
                }}
            >
                <SectionBlockWrapper link="Details" isLarge={true}>
                    <View style={GlobalStyles.textContentBlock}>
                        <Text style={GlobalStyles.titleBlockLarge}>Weekly {'\n'}Riddle</Text>
                        <Text style={GlobalStyles.descriptionBlock}>Riddles you need to {'\n'}solve weekly</Text>
                    </View>
                    <Image source={QuestionSpriteImage} style={GlobalStyles.questionSpriteBlockImage}/>
                    <Image source={QuestionImage} style={GlobalStyles.questionBlockImage}/>
                </SectionBlockWrapper>

                <View style={{flexDirection: 'row', gap: 16}}>
                    <SectionBlockWrapper link="Details" isLarge={false}>
                        <View style={GlobalStyles.textContentBlock}>
                            <Text style={GlobalStyles.titleBlockSmall}>
                                3 Days {'\n'}
                                Exp. Riddles
                            </Text>
                            <Text style={GlobalStyles.descriptionBlock}>
                                3 days {'\n'}
                                for solving
                            </Text>
                        </View>
                        <Image source={ThreeDaysSpriteImage} style={GlobalStyles.questionSpriteBlockImage}/>
                        <Image source={ThreeDaysImage} style={GlobalStyles.threeBlockImage}/>
                    </SectionBlockWrapper>

                    <SectionBlockWrapper link="Details" isLarge={false}>
                        <View style={GlobalStyles.textContentBlock}>
                            <Text style={GlobalStyles.titleBlockSmall}>
                                1 Day{'\n'}
                                Exp. Riddles
                            </Text>
                            <Text style={GlobalStyles.descriptionBlock}>
                                1 day{'\n'}
                                for solving
                            </Text>
                        </View>
                        <Image source={OneDaySpriteImage} style={GlobalStyles.questionSpriteBlockImage}/>
                        <Image source={OneDayImage} style={GlobalStyles.oneBlockImage}/>
                    </SectionBlockWrapper>
                </View>

                <SectionBlockWrapper link="Details" isLarge={true}>
                    <View style={GlobalStyles.textContentBlock}>
                        <Text style={GlobalStyles.titleBlockMedium}>
                            Special Brand Riddles
                        </Text>
                        <Text style={GlobalStyles.descriptionBlock}>
                            Riddles related with popular brands such as
                        </Text>
                        <View style={{flexDirection: 'row', gap: 8}}>
                            <Image source={NikeLogo}/>
                            <Image source={MackLogo}/>
                            <Image source={LegoLogo}/>
                        </View>
                    </View>
                    <Image source={BrandImage} style={GlobalStyles.brandBlockImage}/>
                </SectionBlockWrapper>

                <StatusBar style="auto"/>
            </View>
        </ScrollView>
    );
}
