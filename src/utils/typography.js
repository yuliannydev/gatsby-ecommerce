import Typography from 'typography'

import grandViewTheme from "typography-theme-grand-view"

const typography = new Typography(grandViewTheme)

// Export helper functions
export const { scale, rhythm, options } = typography

/* const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    headerFontFamily: [
        'Press Start 2P',
        'Helvetica neue',
        'Lato'
    ],
    bodyFontFamily: [
        
        'Press Start 2P',
        'Helvetica neue',
        'Lato'
    ]

}) */

export default typography