import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WeeklyScreen from './screens/WeeklyScreen';
import AppLoading from "expo-app-loading";
import {useFonts} from "expo-font";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import LeaderboardScreen from "./screens/LeaderboardScreen";
import SettingsScreen from "./screens/SettingsScreen";
import {HomeIcon, LeaderboardIcon, SettingsIcon} from "./components/icons/NavBarIcons";

const Tab = createBottomTabNavigator();

export default function App() {
    let [fontsLoaded] = useFonts({
        'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
        'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
        'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
        'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
        'Poppins-Thin': require('./assets/fonts/Poppins-Thin.ttf')
    })

    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        header: props => <Header {...props}/>,
                        tabBarStyle: {
                            backgroundColor: '#f4f5fa',
                            shadowOpacity: 0,
                            borderBlockColor: 'transparent',
                            elevation: 0,
                            height: 70,
                        },
                        tabBarLabelStyle: {
                            fontSize: 10,
                            fontFamily: 'Poppins-SemiBold',
                            marginBottom: 10
                        },
                        tabBarInactiveTintColor: '#5F6F89',
                        tabBarActiveTintColor: '#3D444F',
                    }}
                    initialRouteName="Home"
                >
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <HomeIcon
                                    color={focused ? '#3D444F' : '#5F6F89'}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Leaderboard"
                        component={LeaderboardScreen}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <LeaderboardIcon
                                    color={focused ? '#3D444F' : '#5F6F89'}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Settings"
                        component={SettingsScreen}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <SettingsIcon
                                    color={focused ? '#3D444F' : '#5F6F89'}
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Details"
                        component={WeeklyScreen}
                        options={{
                            tabBarItemStyle: {display: 'none'},
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}
