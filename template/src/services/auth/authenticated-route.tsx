import { FC, ReactNode } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './context';

type AuthenticatedRouteProps = {
    path: string;
    element: ReactNode;
};

export const AuthenticatedRoute: FC<AuthenticatedRouteProps> = ({
    path,
    element
}) => {
    const auth = useAuth();

    return auth.user ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate to="/sign-in" />
    );
};
