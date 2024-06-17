import React from "react";
import { VStack, Text, Center } from "native-base";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Highlights() {
    return (
        <VStack style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Center>
                <MaterialIcons name="construction" size={80} color="#db254a" mb={20} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop:30, color: '#333' }}>
                    Página em Desenvolvimento
                </Text>
                <Text style={{ fontSize: 16, marginTop: 20, color: '#555', textAlign: 'center', paddingHorizontal: 20 }}>
                    Estamos trabalhando duro para trazer novidades incríveis para você. Volte em breve para conferir as atualizações!
                </Text>
            </Center>
        </VStack>
    );
}
