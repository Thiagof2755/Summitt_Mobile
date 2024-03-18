import React from 'react';
import { Text, Input, Box, FormControl, Button, Link } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { VStack } from 'native-base';
import { Title } from './components/Title';
import { InputLabel } from './components/InputLabel';

export default function Login() {
    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Box p={5} flex={1}>
                <Text fontWeight="bold" textAlign="center" mt="15%" fontSize="48" fontFamily={'heading'}>
                    Summitt
                </Text>
                <VStack space={5} w="100%" mt="30%">
                    <Title>Entrar</Title>
                    <Box w="100%">
                        <InputLabel
                            Label="Email"
                            placeholder="Insira seu endereço de e-mail" />
                        <FormControl mt={3}>
                            <InputLabel
                                Label="Senha"
                                placeholder="Insira sua senha" />
                        </FormControl>
                        <Button mt={5} w="100%" size="lg" bg="Black">
                            Entrar
                        </Button>
                        <Link href="/criar" mt={5} _text={{ color: "Black" }}>
                            Criar conta
                        </Link>
                    </Box>
                </VStack>
            </Box>
        </KeyboardAwareScrollView>
    );
}
