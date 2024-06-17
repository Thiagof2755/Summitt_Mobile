import React, { useState } from 'react';
import { Text, Box, FormControl, Button, Link, VStack } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { Title } from './components/Title';
import InputLabel from './components/InputLabel'; 

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await axios.post('http://3.97.199.173:8080/summit/login', {
                username: email,
                password: password
            });
            if (response.status === 200) {
                Alert.alert('Login Successful');
                navigation.navigate('Screen'); // Replace 'Screen' with the actual screen you want to navigate to
            } else {
                Alert.alert('Login Failed', 'Invalid credentials');
            }
        } catch (error) {
            Alert.alert('Login Error', 'Email ou senha errados');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Box p={5} flex={1} bg={"white"}>
                <Text textAlign="center" mt="15%" fontSize="48" fontFamily={'heading'}>
                    Summitt
                </Text>
                <VStack space={5} w="100%" mt="30%">
                    <Title>Entrar</Title>
                    <Box w="100%">
                        <InputLabel
                            label="E-mail"
                            placeholder="Insira seu endereço de e-mail"
                            type='text'
                            value={email}
                            onChangeText={setEmail} />
                        <FormControl mt={3}>
                            <InputLabel
                                label="Senha"
                                placeholder="Insira sua senha"
                                type='password'
                                value={password}
                                onChangeText={setPassword} />
                        </FormControl>
                        <Button mt={5} w="100%" size="lg" bg="Black"
                                onPress={handleLogin} isLoading={loading}>
                            Entrar
                        </Button>
                        <Link alignSelf="center" href="/criar" mt={5} _text={{ color: "Black" }}>
                            Esqueceu sua senha?
                        </Link>
                    </Box>
                    <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
                        <Text color={"gray.500"}>Ainda não tem cadastro? </Text>
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
