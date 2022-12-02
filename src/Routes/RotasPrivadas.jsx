import { Home } from "../screens/Home"
import Detalhes from "../screens/Detalhes"
import { Sobre } from "../screens/Sobre";
import Update from "../screens/Update"
import { Add } from "../screens/Add";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{  headerShown:false, }} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Update" component={Update} />
    </Stack.Navigator>
)}


export const RotasPrivadas = () => {
    return (
            <tab.Navigator  screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  if (route.name === 'Home') {
                    return (
                      <Ionicons
                        name={
                          focused
                            ? 'ios-home'
                            : 'ios-home-outline'
                        }
                        size={size}
                        color={color}
                      />
                    );
                  } else if (route.name === 'Adicionar') {
                    return (
                      <Ionicons
                        name={focused ? 'add-circle-sharp' : 'add-circle-outline'}
                        size={size}
                        color={color}
                      />
                    );
                  }else if (route.name === 'Grupo') {
                    return (
                      <Ionicons
                        name={focused ? 'people-sharp' : 'people-outline'}
                        size={size}
                        color={color}
                      />
                    );
                  }
                },
                tabBarInactiveTintColor: 'white',
                tabBarActiveTintColor: 'blue',
                tabBarActiveBackgroundColor: 'black',
                tabBarInactiveBackgroundColor: 'black',
              })}
            >
                
                <tab.Screen name="Home" component={HomeStack} options={{unmountOnBlur:true,  headerShown:false }}/>
                <tab.Screen name="Adicionar" component={Add} options={{ headerShown: false }}/>
                <tab.Screen name="Grupo" component={Sobre} options={{ headerShown: false }}/>
            </tab.Navigator>
    );
};
