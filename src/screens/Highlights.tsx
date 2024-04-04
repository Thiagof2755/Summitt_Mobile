import React from "react";
import { VStack, Text } from "native-base";
import CardDescription from "../components/CardDescription";

export default function Highlights() {
    return (
        <VStack style={{ flex: 1, backgroundColor: 'white' }}>
            <CardDescription />
        </VStack>
    );
}