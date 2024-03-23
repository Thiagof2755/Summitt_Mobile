import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Register from "./Register";
import Login from "./Login";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
            name="Login"
            component={Login}
        />
        <Stack.Screen
            name="Register"
            component={Register}
        />
    </Stack.Navigator>
);

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Auth" component={AuthStack}
                    options={{ tabBarStyle: { display: 'none' }, headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
