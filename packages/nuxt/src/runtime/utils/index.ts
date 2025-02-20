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
