export type GrayColor = 'gray' | 'mauve' | 'slate' | 'sage' | 'olive' | 'sand'
export type Color = GrayColor | 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'orange' | 'amber' | 'yellow' | 'lime' | 'mint' | 'sky' | 'gold' | 'bronze' | 'brown'

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

export function generateScale(color: Color) {
  const scale = Array.from({ length: 12 }, (_, i) => {
    const id = i + 1
    return [
      [id, `var(--${color}-${id})`],
      [`a${id}`, `var(--${color}-a${id})`],
    ]
  }).flat()

  return Object.fromEntries(scale)
}
