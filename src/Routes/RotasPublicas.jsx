import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/index";
import Welcome from "../screens/Welcome"
import { RotasPrivadas } from "../Routes/RotasPrivadas";

const Stack = createNativeStackNavigator();

export const RotasPublicas = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false }}
      />

      <Stack.Screen name="Privado" component={RotasPrivadas} />
    </Stack.Navigator>
  );
};
