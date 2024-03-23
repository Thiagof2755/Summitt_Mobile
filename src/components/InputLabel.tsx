import React from 'react';
import { FormControl, Input, Text } from 'native-base';

type InputType = "text" | "password"; // Definindo os tipos suportados para o input

interface InputLabelProps {
    type: InputType; // Restringindo o tipo para ser apenas "text" ou "password"
    placeholder: string;
    label?: string; // Alterando para tornar o label opcional
    errorMessage?: string;
    customStyles?: any;
    width?: number | string; // Adicionando a propriedade width
}

const InputLabel: React.FC<InputLabelProps> = ({ type, placeholder, label, errorMessage, customStyles, ...rest }) => {
    return (
        <FormControl mt={0}
        w="auto"
        {...customStyles}
        >
            <FormControl.Label>{label}</FormControl.Label>
            <Input
                placeholder={placeholder}
                borderColor="Black"
                size='lg'
                p={4}
                w={rest.width ? rest.width : "100%"}
                _focus={{ borderColor: "Black", bg: "white" }}
                type={type} // Usando o tipo restrito
                {...rest}
                
            />
            {errorMessage && <Text color="red.500">{errorMessage}</Text>}
            
        </FormControl>
    );
}

export default InputLabel;
