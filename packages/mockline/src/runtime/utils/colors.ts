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

const shades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12']

/**
 * Generate a color scale based on the given color.
 *
 * @param color - The color for which to generate the scale.
 * @param colorToAssign - The color to assign the scale to.
 * @returns The color scale configuration.
 */
export function generateColor(color: string, colorToAssign?: string): string {
  if (colorToAssign) {
    const allShades = `${shades.map(shade => `--color-${color}-${shade}: var(--${colorToAssign}-${shade});`).join('\n  ')}`
    return allShades + `\n  --color-${color}-DEFAULT: var(--${colorToAssign}-${color === 'canvas' ? '1' : '9'});`
  }
  const allShades = `${shades.map(shade => `--color-${color}-${shade}: var(--${color}-${shade});`).join('\n  ')}`
  return allShades + `\n  --color-${color}-DEFAULT: var(--${color}-${color === 'canvas' ? '1' : '9'});`
}
