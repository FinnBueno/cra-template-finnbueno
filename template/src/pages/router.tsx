import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'services/auth';
import { Flex } from 'theme-ui';
import { SignInPage } from 'pages/auth/sign-in';
import { SignUpPage } from 'pages/auth/sign-up';
import { MainPage } from 'pages/main';

export const AppRouter: FC<{}> = () => {
    const { authenticatedWrap, unauthenticatedWrap } = useAuth();
    return (
        <Flex sx={{ height: '100%' }}>
            <Routes>
                <Route
                    path="/sign-in"
                    element={unauthenticatedWrap(SignInPage)}
                />
                <Route
                    path="/sign-up"
                    element={unauthenticatedWrap(SignUpPage)}
                />
                <Route path="/" element={authenticatedWrap(MainPage)} />
            </Routes>
        </Flex>
    );
};
