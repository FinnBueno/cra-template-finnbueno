import React, {
    Children,
    ElementType,
    ReactElement,
    useContext,
    useEffect,
    useMemo,
    useState,
    createContext,
    FC
} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { LoadingPage } from 'pages';
import { Navigate } from 'react-router-dom';

type AuthenticatedUser =
    | {
          uid: string;
      }
    | undefined;

type Auth = {
    loading: boolean;
    user?: AuthenticatedUser;
    authenticatedWrap: (_element: ElementType) => ReactElement;
    unauthenticatedWrap: (_element: ElementType) => ReactElement;
};

export const AuthContext = createContext<Auth>({
    loading: true,
    authenticatedWrap: (_) => <></>,
    unauthenticatedWrap: (_) => <></>
});

export const AuthProvider: FC<Children> = ({ children }) => {
    const [user, setUser] = useState<AuthenticatedUser>(undefined);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        onAuthStateChanged(getAuth(), (fbUser) => {
            // onSuccess
            setLoading(false);
            setUser(
                fbUser
                    ? {
                          uid: fbUser.uid
                      }
                    : undefined
            );
        });
    }, []);

    const memoizedUser = useMemo<Auth>(() => {
        const authenticationWrap = (
            Element: React.ElementType,
            shouldBeAuthed: boolean
        ): React.ReactElement => {
            if (!!user === shouldBeAuthed) {
                return <Element />;
            }
            if (user && !shouldBeAuthed) {
                return <Navigate to="/" />;
            }
            if (!user && shouldBeAuthed) {
                return <Navigate to="/sign-in" />;
            }
            return <Navigate to="/sign-in" />;
        };
        return {
            user,
            loading,
            authenticatedWrap: (element) => authenticationWrap(element, true),
            unauthenticatedWrap: (element) => authenticationWrap(element, false)
        };
    }, [user, loading]);

    return (
        <AuthContext.Provider value={memoizedUser}>
            {loading ? <LoadingPage /> : children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
