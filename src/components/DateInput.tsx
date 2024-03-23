import React from 'react';
import { FormControl, HStack, Input, Text } from 'native-base';


interface DateInputProps {
    label: string; // Propriedade para o rótulo
}

const DateInput: React.FC<DateInputProps> = ({ label }) => {
    return (
        <FormControl mt={5} p={0}>
            <Text fontSize="sm" color="gray.500">{label}</Text> {/* Rótulo superior passado como propriedade */}
            <HStack space={2}
                m={0}
                w="100%"
                alignItems="center"
                justifyContent="flex-start">
                <Input
                    placeholder="Dia"
                    type="text"
                    width="25%"
                    borderColor="Black"
                    size='lg'
                    p={4}
                    keyboardType="numeric"
                />
                <Input
                    placeholder="Mês"
                    type="text"
                    width="25%"
                    borderColor="Black"
                    size='lg'
                    p={4}
                    keyboardType="numeric"
                />
                <Input
                    placeholder="Ano"
                    type="text"
                    width="45%"
                    borderColor="Black"
                    size='lg'
                    p={4}
                    keyboardType="numeric"
                />
            </HStack>
        </FormControl>
    );
}

export default DateInput;
