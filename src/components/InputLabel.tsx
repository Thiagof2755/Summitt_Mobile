import { ITextProps, Input, FormControl } from 'native-base';

interface TitleProps extends ITextProps {
    placeholder: string;
    Label: string;
}

export function InputLabel({ placeholder, Label, ...rest }: TitleProps) {
    return (
        <FormControl>
            <FormControl.Label>{Label}</FormControl.Label>
            <Input 
            
                placeholder={placeholder}
                borderColor="Black"
                size='lg'
                p={4}
                w="100%"
                _focus={{ borderColor: "Black", bg: "white" }}
                {...rest}
            />
        </FormControl>
    );
}