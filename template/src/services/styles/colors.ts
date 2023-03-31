type ColorTheme = {
    text: string,
    background: string,
    card: string;
    primary: string,
    secondary: string,
    accent: string,
    highlight: string,
    muted: string,
    error: string,
    input: string
}

const dark: ColorTheme = {
    text: '#FFFFFF',
    background: '#153043',
    primary: '#437AEA',
    secondary: '#232A5A',
    accent: '#CA4534',
    highlight: '#F4E392',
    muted: '#A6B8B9',
    input: '#234255',
    card: '#214053',
    error: '#D72332'
};

export const colors = {
    ...dark,
    modes: {
        dark
    }
};
