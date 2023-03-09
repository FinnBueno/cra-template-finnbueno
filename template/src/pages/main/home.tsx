import { FC } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Button, Text } from 'theme-ui';

export const MainPage: FC<{}> = () => (
    <Button onClick={() => signOut(getAuth())}>
        <Text>Sign out</Text>
    </Button>
);
