import React from 'react';

declare module 'react' {
    export type Children<P = unknown> = P & {
        children?: React.ReactNode | undefined;
    };
}
