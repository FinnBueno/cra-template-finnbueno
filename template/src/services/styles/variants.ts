// Everything about variants: https://theme-ui.com/components/variants

/*
- Defaults -

Alert: N/A
*/
const alerts = {};

/*
- Defaults -

Badge: N/A
*/
const badges = {};

/*
- Defaults -
Button:       buttons.primary
Close:        buttons.close
IconButton:   buttons.icon
MenuButton:   buttons.menu.
*/
const buttons = {
    // primary: {
    //   color: 'white',
    //   bg: 'primary',
    // },
    // secondary: {
    //   color: 'white',
    //   bg: 'secondary',
    // },
    primary: {
        cursor: 'pointer',
        fontWeight: 'button',
        py: 3,
        m: 2,
        boxShadow: 'basic',
        transition: 'all 200ms linear',
        background: 'linear-gradient(#0000, rgb(0 0 0/10%)) top/100% 1000%',
        width: '100%',
        // maxWidth: 'button',
        '&:hover': {
            backgroundPosition: 'bottom'
        },
        '&:active': {
            transform: 'translateY(2px) scale(.99)'
        },
        color: 'white',
        bg: 'primary',
        display: 'flex',
        justifyContent: 'center',
    },
    outlined: {
        variant: 'buttons.primary',
        color: 'primary',
        bg: 'white',
        borderWidth: 'button',
        borderStyle: 'button',
        borderColor: 'primary',
    },
    text: {
        variant: 'buttons.outlined',
        boxShadow: 'none',
        width: 'initial',
        borderWidth: 0,
        bg: 'none'
    }
};

/*
- Defaults -

Card:   cards.primary
*/
const cards = {};

/*
- Defaults -

Label:      forms.label
Input:      forms.input
Select:     forms.select
Textarea:   forms.textarea
Radio:      forms.radio
Checkbox:   forms.checkbox
Slider:     forms.slider
*/
const forms = {
    label: {
        fontWeight: 'bold',
        fontSize: 1,
        color: 'muted',
        mt: 3
    },
    error: {
        fontWeight: 'bold',
        fontSize: 1,
        color: 'error'
    },
    input: {
        width: '100%',
        bg: 'input',
        p: 3,
        my: 1,
        border: 'none',
        boxShadow: 'basic',
        '&:focus': {
            outlineStyle: 'solid',
            outlineWidth: 2,
            outlineColor: 'muted',
        }
    }
};

/*
- Defaults -

Grid:   N/A
*/
const grids = {};

/*

- Defaults -
Image:    N/A
Avatar:   images.avatar
*/
const images = {};

/*
- Defaults -

Container:    layout.container
*/
const layout = {
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    }
};

/*
- Defaults -

Link:     styles.a
NavLink:  links.nav
*/
const links = {};

/*
- Defaults -

Message: N/A
*/
const messages = {};

/*
- Defaults -

Text:     N/A
Heading:  text.heading
*/
const text = {
    heading: {
        mt: 4,
        mb: 2
    }
};

export const variants = {
    alerts,
    badges,
    buttons,
    cards,
    forms,
    grids,
    images,
    layout,
    links,
    messages,
    text
};
