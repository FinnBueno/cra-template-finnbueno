import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setHandleMissingTranslation, setLocale, setTranslations } from 'react-i18nify';
import { ThemeProvider } from 'theme-ui';
import { AppRouter } from 'pages/router';
import { AuthProvider } from 'services/auth';
import { en, nl } from 'services/localization';
import { theme } from 'services/styles';

setTranslations({
    en,
    nl: {
        ...en,
        ...nl
    }
});

setHandleMissingTranslation((key: string) => `Missing translation: ${key}`);

setLocale('en');

export const App: React.FC<{}> = () => (
    <BrowserRouter>
        <ToastContainer position="top-right" autoClose={5000} theme="colored" />
        <ThemeProvider theme={theme}>
            <AuthProvider>
                {/* Providers go here */}
                <AppRouter />
            </AuthProvider>
        </ThemeProvider>
    </BrowserRouter>
);
