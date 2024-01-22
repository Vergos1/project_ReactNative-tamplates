import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';



const Stack = createStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="Home" component={HomeScreen}/>
       {/*<Stack.Screen name="Details" component={DetailsScreen}/>*/}
     </Stack.Navigator>
   </NavigationContainer>
  );
}