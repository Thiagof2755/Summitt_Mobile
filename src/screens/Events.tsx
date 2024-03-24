import React from "react";
import { VStack, Box, View } from "native-base";
import CardEvent from "../components/CardEvent";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Events() {
    return (
        <VStack style={{ flex: 1, backgroundColor: 'white' }}>
            <Box>
                <KeyboardAwareScrollView>
                    <View> 
                        <CardEvent />
                        <CardEvent />
                        <CardEvent />
                        <CardEvent />
                        <CardEvent />
                        <CardEvent />
                        <CardEvent />
                        <CardEvent />
                    </View>
                </KeyboardAwareScrollView>
            </Box>
        </VStack>
    );
}
