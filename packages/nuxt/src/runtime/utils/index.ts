export function transformSlot(slot: any, index: number): any {
  if (typeof slot.type === 'symbol') {
    return slot.children?.map(transformSlot)
  }
  return {
    label: slot.props?.filename || slot.props?.label || `${index}`,
    icon: slot.props?.icon,
    component: slot
  }
}

export * from './useComponent'

// eslint-disable-next-line @typescript-eslint/naming-convention
export function omit<Data extends object, Keys extends keyof Data>(data: Data, keys: Keys[]): Omit<Data, Keys> {
  const result = { ...data }

  for (const key of keys) {
    delete result[key]
  }

  return result as Omit<Data, Keys>
}
