import { FC } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Flex, Input, Text } from 'theme-ui';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Translate, translate } from 'react-i18nify';
import { toast } from 'react-toastify';

type SignUpForm = {
    username: string;
    email: string;
    password: string;
};

export const SignUpPage: FC<{}> = () => {
    const auth = getAuth();

    const schema = yup.object().shape({
        username: yup
            .string()
            .min(3, translate('auth.error.usernameMinimum', { count: 3 }))
            .required(translate('auth.error.usernameMinimum', { count: 3 })),
        email: yup
            .string()
            .email(translate('auth.error.emailValid'))
            .required(translate('auth.error.emailValid')),
        password: yup
            .string()
            .min(5, translate('auth.error.passwordMinimum', { count: 5 }))
            .required(translate('auth.error.passwordMinimum', { count: 5 }))
    });

    const { handleSubmit, register } = useForm<SignUpForm>({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    const signUp = ({ email, password }: SignUpForm) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                toast(`Welcome ${user.displayName}!`, {
                    type: 'success'
                });
            })
            .catch((_error) => {
                // TODO: Check for the right error code
                toast(translate('auth.error.emailAlreadyInUse'), {
                    type: 'error'
                });
            });
    };

    return (
        <Flex
            sx={{
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-start'
            }}
        >
            <Text
                variant="h4"
                color="white"
                style={{
                    fontFamily:
                        '"Arial Black", "Roboto", "Helvetica", "Arial", sans-serif'
                }}
            >
                My App
            </Text>
            <form>
                <Flex sx={{ flexDirection: 'column' }} m={3} mb={2}>
                    <Text variant="h2">
                        <Translate value="auth.welcome" />
                    </Text>
                    <Text variant="body1">
                        <Translate value="auth.welcomeSubtitle" />
                    </Text>
                    <Flex mt={4} mb={2}>
                        <Input
                            {...register('email', { required: true })}
                            defaultValue=""
                            // name='email'
                            // label='E-mail'
                            // type='email'
                        />
                    </Flex>
                    <Flex mb={2}>
                        <Input
                            {...register('password', { required: true })}
                            defaultValue=""
                            // name='password'
                            // label={translate('auth.password')}
                            // type='password'
                        />
                    </Flex>
                    <Button variant="contained" onClick={handleSubmit(signUp)}>
                        <Translate value="auth.createAccount" />
                    </Button>
                </Flex>
            </form>
            <Flex mt={2} sx={{ justifyContent: 'center' }}>
                <Button onClick={() => navigate('/sign-in')}>
                    <Translate value="auth.signInInstead" />
                </Button>
            </Flex>
        </Flex>
    );
};
