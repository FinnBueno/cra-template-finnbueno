import { FC } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Flex, Heading, Container, Text } from 'theme-ui';
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
import { toast } from 'react-toastify';
import { ButtonWithIcon } from 'components/atoms';
import { InputField } from 'components/molecules';

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

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<SignInForm>({
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate();

    const signInError = ({ code }: any) => {
        if (code === 'auth/wrong-password' || code === 'auth/user-not-found') {
            toast(translate('auth.error.userNotFound'), {
                type: 'error'
            });
        } else {
            toast('Something went wrong during sign in. Please try again later', {
                type: 'error'
            });
        }
    }

    const signIn = ({ email, password }: SignInForm) => {
        signInWithEmailAndPassword(auth, email, password).catch(signInError);
    };

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).catch(signInError);
    };

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Flex
                sx={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 'narrow'
                }}
                as="form"
                onSubmit={handleSubmit(signIn)}
            >
                <Flex
                    sx={{
                        alignItems: 'center',
                        flexDirection: 'column',
                        mb: 5
                    }}
                >
                    <Heading as="h1">My App</Heading>
                    <Text>
                        <Translate value="auth.welcome" />
                    </Text>
                    <Text>
                        <Translate value="auth.welcomeSubtitle" />
                    </Text>
                </Flex>
                <InputField
                    {...register('email', { required: true })}
                    defaultValue=""
                    label={translate('auth.email')}
                    errors={errors}
                    type="email"
                />
                <InputField
                    {...register('password', { required: true })}
                    defaultValue=""
                    type="password"
                    label={translate('auth.password')}
                    errors={errors}
                />
                <Button sx={{ mt: 6 }} variant="primary" onClick={handleSubmit(signIn)}>
                    <Translate value="auth.signIn" />
                </Button>
                <ButtonWithIcon
                    variant="outlined"
                    onClick={signInWithGoogle}
                    icon={<FcGoogle size={20} />}
                >
                    <Translate value="auth.signInWithGoogle" />
                </ButtonWithIcon>
                <Button variant="text" onClick={() => navigate('/sign-up')}>
                    <Translate value="auth.createAccountInstead" />
                </Button>
            </Flex>
        </Container>
    );
};
