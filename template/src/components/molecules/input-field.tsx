import { forwardRef } from 'react';
import { FieldErrors } from 'react-hook-form';
import { Flex, Input, InputProps, Label } from 'theme-ui';

export const InputField = forwardRef<
    HTMLInputElement,
    InputProps & {
        name: string;
        label?: string;
        errors: FieldErrors<any>;
    }
>(({ label, errors, name, ...rest }, ref) => {
    const errorForField =
        errors && errors[name] && (errors[name]?.message as string);
    return (
        <Flex
            sx={{
                width: '100%',
                flexDirection: 'column'
            }}
        >
            {label ? <Label>{label}</Label> : <></>}
            <Input ref={ref!} name={name} {...rest} />
            {errorForField ? (
                <Label variant="error">{errorForField}</Label>
            ) : (
                <></>
            )}
        </Flex>
    );
});
