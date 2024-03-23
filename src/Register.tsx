import React from 'react';
import { Text, Box, FormControl, Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { VStack } from 'native-base';
import { Title } from './components/Title';
import InputLabel from './components/InputLabel';
import DateInput from './components/DateInput';

export default function Register() {
    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Box p={5} flex={1}>
                <Text textAlign="center" mt="15%" fontSize="48" fontFamily={'heading'}>
                    Summitt
                </Text>
                <VStack space={0} w="100%" mt={"15%"}>
                    <Title>Cadastro</Title>
                    <Box w="100%" flexWrap="wrap">
                        <InputLabel
                            label="Nome completo"
                            placeholder="Insira seu nome completo"
                            type='text'
                        />
                        <FormControl mt={3}>
                            <InputLabel
                                label="E-mail"
                                placeholder="Insira seu endereço de e-mail"
                                type='text'
                            />
                        </FormControl>
                        <FormControl mt={3}>
                            <InputLabel
                                label="Senha"
                                placeholder="Senha"
                                type="password"
                            />
                        </FormControl>
                        <FormControl mt={3}>
                            <InputLabel
                                label="Confirme sua senha"
                                placeholder="Confirme sua senha"
                                type="password"
                            />
                        </FormControl>
                        <FormControl mt={3} w={"100%"}>
                            <DateInput label="Data de nascimento" />
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
