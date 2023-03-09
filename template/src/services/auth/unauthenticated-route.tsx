import { FC, ReactNode } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './context';

type UnauthenticatedRouteProps = {
    path: string;
    element: ReactNode;
};

export const UnauthenticatedRoute: FC<UnauthenticatedRouteProps> = ({
    path,
    element
}) => {
    const auth = useAuth();

    return !auth.user ? (
        <Route path={path} element={element} />
    ) : (
        <Navigate to="/" />
    );
};
