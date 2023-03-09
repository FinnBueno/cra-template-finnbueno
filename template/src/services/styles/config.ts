export const config = {
    // Enables CSS custom properties to help mitigate a flash of unstyled content during rehydration
    useCustomProperties: true,
    // Adds styles defined in theme.styles.root to the <html> element along with color and background-color
    useRootStyles: true,
    // The key used for the top-level color palette in theme.colors
    initialColorModeName: 'default',
    // Initializes the color mode based on the prefers-color-scheme media query
    useColorSchemeMediaQuery: true,
    // Adds a global box-sizing: border-box style
    useBorderBox: true,
    // Persists the color mode in localStorage
    useLocalStorage: true
};
