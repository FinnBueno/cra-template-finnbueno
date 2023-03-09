import { Theme } from 'theme-ui';
import { styles } from 'services/styles/elements';
import { fontData } from 'services/styles/fonts';
import { colors } from 'services/styles/colors';
import { scales } from 'services/styles/scales';
import { config } from 'services/styles/config';
import { variants } from 'services/styles/variants';

export const theme: Theme = {
    breakpoints: [40, 52, 64].map((n) => `${n}em`),
    // Example: [ '40em', '@media (min-width: 56em) and (orientation: landscape)', '64em' ],

    colors,

    styles,

    ...scales,

    ...fontData,

    ...variants,

    config
};
