import { FC } from 'react';
import { Button, ButtonProps, Flex } from 'theme-ui';

export const ButtonWithIcon: FC<ButtonProps & { icon: any }> = ({
    icon,
    children,
    ...rest
}) => (
    <Button {...rest}>
        <Flex
            sx={{
                alignItems: 'center'
            }}
        >
            {icon}
            {children}
        </Flex>
    </Button>
);
