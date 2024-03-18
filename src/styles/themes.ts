import { extendTheme } from 'native-base';
import * as Font from 'expo-font';

// Carrega a fonte Comfortaa antes de estender o tema
async function loadFonts() {
    await Font.loadAsync({
        Comfortaa: require('../font/Comfortaa.ttf'),
    });
}

loadFonts(); // Chama a função para carregar a fonte Comfortaa

// Estende o tema do NativeBase após carregar a fonte
export const theme = extendTheme({
    colors: {
        DarkPurple: "#471CA8",
        MediumPurple: "#884AB2",
        Orange: "#FF930A",
        RedOrange: "#F24B04",
        PinkShock: "#D1105A",
        White: "#F5F5F5",
        Black: "#000000",
        Gray: "#BDBDBD",
        LightGray: "#D1D9D9",
        
        
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24,
        xxl: 36,

    },
    fonts: {
        heading: 'Comfortaa',
        body: 'Comfortaa',
    },
});
