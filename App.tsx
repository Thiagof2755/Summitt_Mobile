import Login from './src/Login';
import { NativeBaseProvider,StatusBar } from 'native-base';
import { theme } from './src/styles/themes';
import Register from './src/Register';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar backgroundColor="auto"/>
      <Register />
    </NativeBaseProvider>
  );
}


