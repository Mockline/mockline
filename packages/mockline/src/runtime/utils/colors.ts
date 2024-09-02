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

/**
 * Generate a color scale based on the given color.
 *
 * @param color - The color for which to generate the scale.
 * @returns The color scale configuration.
 */
export function generateColor(color: string): string {
  const shades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9']

  return `${shades.map(shade => `--color-${color}-${shade}: var(--${color}-${shade});`).join('\n  ')}`
}

/**
 * Generate a color scale based for the given var with a given color.
 *
 * @param varName - The name of the var to assign the color to.
 * @param color - The color for which to assign the var.
 * @returns The color scale configuration.
 */
export function generateColorVar(varName: string, color: string): string {
  const shades = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9']

  return `${shades.map(shade => `--color-${varName}-${shade}: var(--${color}-${shade});`).join('\n  ')}`
}
