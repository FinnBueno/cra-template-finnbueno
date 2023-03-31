export const scales = {
    space: [0, 2, 4, 8, 12, 16, 24, 32, 64, 128, 256, 512],
    // scales can be defined using an array or an object like so
    // the value can then be referred to using the key
    // define a value for maximum page width here!
    sizes: {
        // wide: 2048,
        container: 1024,
        narrow: 512,
        button: 256,
    },
    borders: {
        button: 'primary'
    },
    borderWidths: {
        button: '1px',
        input: '1px'
    },
    borderStyles: {
        button: 'solid'
    },
    // radii: {} / [],
    shadows: {
        // horizontal, vertical, blur, spread, color
        basic: '0px 10px 10px -8px rgba(0,0,0,.25)'
    },
    // zIndices: {} / [],
};
