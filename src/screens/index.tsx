import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image, Text, View } from "react-native";
import Location from "./assets/Location.svg";

import Events from "./Events";
import Highlights from "./Highlights";
import Live from "./Live";

const Tab = createMaterialTopTabNavigator();

export default function Screen() {
    return (
        <NavigationContainer independent={true}>
            <View style={{ flex: 1 , backgroundColor: 'white' }}>
                {/* Cabeçalho */}
                <View style={{ height: 100, backgroundColor: 'white', padding: 15 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image
                            source={require("./assets/conta.png")}
                            style={{ width: 62, height: 62, borderRadius: 30, marginRight: 20 }}
                        />
                        <Text style={{ fontSize: 24 }}>Thiago Alves</Text>
                    </View>
                </View>
                {/* Tab Navigation */}
                <Tab.Navigator  
                    initialRouteName="Screen"
                    screenOptions={{
                        tabBarActiveTintColor: 'black',
                        tabBarInactiveTintColor: 'gray',
                        tabBarLabelStyle: { fontSize: 16  },
                        tabBarStyle: { backgroundColor: 'white', height: 50, margin: 10,elevation: 0 },
                        tabBarIndicatorStyle: { backgroundColor: '#D9D9D9', height: '100%' ,borderRadius: 10}, // Indicador de botão cinza
                    }}
                >
                    <Tab.Screen name="Live" component={Live}
                    />
                    <Tab.Screen name="Events" component={Events} />
                    <Tab.Screen name="Highlights" component={Highlights} />
                </Tab.Navigator>
            </View>
        </NavigationContainer>
    );
}
