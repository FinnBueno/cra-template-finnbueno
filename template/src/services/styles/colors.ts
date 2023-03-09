import { ColorModesScale } from 'theme-ui';

const standard = {
    text: '#000000',
    background: '#D6E8E9',
    primary: '#437AEA',
    secondary: '#232A5A',
    accent: '#CA4534',
    highlight: '#F4E392',
    muted: '#A6B8B9'
};

const dark = {
    text: '#000000',
    background: '#D6E8E9',
    primary: '#437AEA',
    secondary: '#232A5A',
    accent: '#CA4534',
    highlight: '#F4E392',
    muted: '#A6B8B9'
};

export const colors: ColorModesScale = {
    ...standard,
    modes: {
        dark
    }
};
