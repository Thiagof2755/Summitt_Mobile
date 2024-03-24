import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import Routes from './src/Routes';
import { theme } from './src/styles/themes';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar translucent backgroundColor="transparent" />
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
