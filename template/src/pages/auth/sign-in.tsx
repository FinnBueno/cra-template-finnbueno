import { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Flex, Input, Text } from 'theme-ui';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup
} from 'firebase/auth';
import { Translate, translate } from 'react-i18nify';
import { ButtonWithIcon } from 'components/atoms';

type SignInForm = {
    email: string;
    password: string;
};

export const SignInPage: FC<{}> = () => {
    const auth = getAuth();

    const schema = yup.object().shape({
        email: yup
            .string()
            .email(translate('auth.error.emailValid'))
            .required(translate('auth.error.emailValid')),
        password: yup
            .string()
            .min(5, translate('auth.error.passwordMinimum', { count: 5 }))
            .required(translate('auth.error.passwordMinimum', { count: 5 }))
    });

    const { handleSubmit, register } = useForm<SignInForm>({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    const signIn = ({ email, password }: SignInForm) => {
        signInWithEmailAndPassword(auth, email, password).catch((_error) => {
            // console.log(error);
        });
    };

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).catch((_error) => {
            // console.log(error);
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
                    <Button variant="contained" onClick={handleSubmit(signIn)}>
                        <Translate value="auth.signIn" />
                    </Button>
                </Flex>
            </form>
            <Flex sx={{ flexDirection: 'column' }} mx={3}>
                <ButtonWithIcon
                    variant="contained"
                    color="neutral"
                    onClick={signInWithGoogle}
                    icon={<FcGoogle size={20} />}
                >
                    <Translate value="auth.signInWithGoogle" />
                </ButtonWithIcon>
                <Flex mt={2} sx={{ justifyContent: 'center' }}>
                    <Button onClick={() => navigate('/sign-up')}>
                        <Translate value="auth.createAccountInstead" />
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};
