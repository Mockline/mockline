export const tailwindColors = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'blue',
  'cyan',
  'sky',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
] as const

export type TailwindColor = typeof tailwindColors[number]

export const colors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'danger',
  'neutral'
] as const

export type MocklineColor = typeof colors[number]

export type Color = TailwindColor | MocklineColor
