import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image, Text, View, StatusBar } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

import Events from "./Events";
import Highlights from "./Highlights";
import Live from "./Live";

const Tab = createMaterialTopTabNavigator();    
export default function Screen() {
    return (
        <NavigationContainer independent={true}>
            <View style={{ flex: 2 , backgroundColor: 'white'  }}>
                {/* Cabeçalho
                onde vai ficar os menus de icones e perfil logado */}
                <View style={{ height: 100, backgroundColor: 'white', padding: 15 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" ,}}>
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
                    screenOptions={({ route }) => ({
                        tabBarActiveTintColor: 'black',
                        tabBarInactiveTintColor: 'gray',
                        tabBarLabelStyle: { fontSize: 16 },
                        tabBarStyle: { backgroundColor: 'white', height:60, margin: 10, elevation: 0, justifyContent: 'center', },
                        tabBarIndicatorStyle: { backgroundColor: '#D9D9D9', height: '100%', borderRadius: 10 },
                    })}
                >
                    <Tab.Screen 
                        name="Events" 
                        component={Events} 
                        options={{
                            tabBarLabel: ({ color }) => (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name="map-marker-alt" size={20} color={color} />
                                    <Text style={{ marginLeft: 5, color ,fontSize: 18 }}>Eventos</Text>
                                </View>
                            ),
                        }}
                    />
                    <Tab.Screen 
                        name="Highlights" 
                        component={Highlights} 
                        options={{
                            tabBarLabel: ({ color }) => (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name="star" size={18} color={"#471CA8"} />
                                    <Text style={{ marginLeft: 5, color ,fontSize: 18  }}>Destaques</Text>
                                </View>
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Live"
                        component={Live}
                        options={{
                            tabBarLabel: ({ color }) => (
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name="video" size={18} color={"#471CA8"} />
                                    <Text style={{ marginLeft: 5, color ,fontSize: 18  }}>Live</Text>
                                </View>
                            ),
                        }}
                    />
                </Tab.Navigator>
            </View>
        </NavigationContainer>
    );
}
