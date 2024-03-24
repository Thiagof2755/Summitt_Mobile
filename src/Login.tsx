import React from 'react';
import { Text, Box, FormControl, Button, Link } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { VStack } from 'native-base';
import { Title } from './components/Title';
import InputLabel from './components/InputLabel'; // Corrigida a importação do InputLabel
import { TouchableOpacity } from 'react-native'; // Importando o TouchableOpacity para criar um link
export default function Login( { navigation } ) {
    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Box p={5} flex={1} bg={"white"}>
                <Text  textAlign="center" mt="15%" fontSize="48" fontFamily={'heading'}>
                    Summitt
                </Text>
                <VStack space={5} w="100%" mt="30%">
                    <Title>Entrar</Title>
                    <Box w="100%">
                        <InputLabel
                            label="E-mail"
                            placeholder="Insira seu endereço de e-mail"
                            type='text' />
                        <FormControl mt={3}>
                            <InputLabel
                                label="Senha"
                                placeholder="Insira sua senha"
                                type='password' />

                        </FormControl>
                        <Button mt={5} w="100%" size="lg" bg="Black"
                        onPress={() => navigation.navigate('Screen')}>
                            Entrar
                        </Button>
                        <Link alignSelf="center" href="/criar" mt={5} _text={{ color: "Black" }}>
                            Esqueceu sua senha?
                        </Link>
                    </Box>
                    <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
                        <Text
                            color={"gray.500"}>Ainda não tem cadastro? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text color="blue.500">
                                Faça seu cadastro!
                            </Text>
                        </TouchableOpacity>
                    </Box>
                </VStack>
            </Box>
        </KeyboardAwareScrollView>
    );
}
