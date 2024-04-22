export type GrayColor = 'gray' | 'mauve' | 'slate' | 'sage' | 'olive' | 'sand'
export type Color = GrayColor | 'primary' | 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'orange' | 'amber' | 'yellow' | 'lime' | 'mint' | 'sky' | 'gold' | 'bronze' | 'brown'

export const grayColors: GrayColor[] = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',
]

export const colors: Color[] = [
  ...grayColors,
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

export const colorsAsRegex = (colors: string[]): string => colors.join('|')

export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (_, r, g, b) => {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
    : null
}

export function generateScale(color: Color) {
  const scale = Array.from({ length: 12 }, (_, i) => {
    const id = i + 1
    return [
      [id, `var(--${color}-${id})`],
      [`a${id}`, `var(--${color}-a${id})`],
      [`DEFAULT`, `var(--${color}-9)`]
    ]
  }).flat()

  return Object.fromEntries(scale)
}
