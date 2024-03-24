
import { NativeBaseProvider,StatusBar } from 'native-base';
import { theme } from './src/styles/themes';
import Routes from './src/Routes';

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar backgroundColor="auto"/>
      <Routes/>
    </NativeBaseProvider>
  );
}


