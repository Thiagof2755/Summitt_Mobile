import React from 'react';
import { Text, Input, Box, FormControl, Button, Link } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { VStack } from 'native-base';
import { Title } from './components/Title';
import { InputLabel } from './components/InputLabel';

export default function Register() {
    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Box p={5} flex={1}>
                <Text fontWeight="bold" textAlign="center" mt="15%" fontSize="48" fontFamily={'heading'}>
                    Summitt
                </Text>
                <VStack space={5} w="100%" mt={"15%"}>
                    <Title>Cadastro</Title>
                    <Box w="100%">
                        <InputLabel
                            Label="Nome completo"
                            placeholder="Insira seu nome completo" />
                        <FormControl mt={3}>
                            <InputLabel
                                Label="E-mail"
                                placeholder="Insira seu endereço de e-mail" />
                        </FormControl>
                        <FormControl mt={3}>
                            <InputLabel
                                Label="Senha"
                                placeholder="Senha" {...{ secureTextEntry: true }} />
                        </FormControl>
                        <FormControl mt={3}>
                            <InputLabel
                                Label="Confirme sua senha"
                                placeholder="Confirme sua senha" {...{ secureTextEntry: true }} />
                        </FormControl>
                        <Button mt={5} w="100%" size="lg" bg="Black">
                            Criar Conta
                        </Button>
                    </Box>
                </VStack>
            </Box>
        </KeyboardAwareScrollView>
    );
}
