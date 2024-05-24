export type Color =
  | 'canvas' | 'gray' | 'mauve' | 'slate' | 'sage' | 'olive' | 'sand'
  | 'primary' | 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum'
  | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal'
  | 'jade' | 'green' | 'grass' | 'orange' | 'amber' | 'yellow' | 'lime'
  | 'mint' | 'sky' | 'gold' | 'bronze' | 'brown';

export const colors: Color[] = [
  'canvas',
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
  'primary',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'orange',
  'amber',
  'yellow',
  'lime',
  'mint',
  'sky',
  'gold',
  'bronze',
  'brown',
]

export const availableColors = colors.filter(color => color !== 'canvas' && color !== 'primary')

/**
 * Generate a safelist of color classes with variants for TailwindCSS.
 *
 * @returns The safelist configuration.
 */
export function generateColorSafelist(): { pattern: RegExp, variants: string[] }[] {
  const variants = ['hover', 'focus', 'active', 'group-hover']
  const classes = ['bg', 'text', 'border', 'ring']

  return ['primary', 'canvas', ...colors].flatMap(color =>
    classes.map(type => ({
      pattern: new RegExp(`^${ type }-${ color }-(a)?(1[0-2]|[1-9])$`),
      variants,
    }))
  )
}

/**
 * Generate a color scale based on the given color.
 *
 * @param color - The color for which to generate the scale.
 * @returns The color scale configuration.
 */
export function generateScale(color: Color): Record<string, string> {
  const scale = Array.from({ length: 12 }, (_, i) => {
    const id = i + 1
    return [
      [id, `var(--${color}-${id})`],
      [`a${id}`, `var(--${color}-a${id})`],
      ['DEFAULT', `var(--${color}-${color === 'canvas' ? '1' : '9'})`],
    ]
  }).flat()

  return Object.fromEntries(scale)
}
