import { ITextProps, Text } from 'native-base';
import { ReactNode } from 'react';

interface TitleProps extends ITextProps{
    children: ReactNode;
}

export function Title( {children, ...rest}: TitleProps ) {

    return (
        <Text fontSize="36" fontFamily={'heading'} {...rest}>
            
            {children}
        </Text>
    );
}