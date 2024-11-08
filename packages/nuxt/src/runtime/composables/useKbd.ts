import { createSharedComposable } from '@vueuse/core'
import { ref, computed, onMounted, type Ref } from 'vue'

export const kbdKeysMap = {
  meta: '',
  command: '⌘',
  shift: '⇧',
  ctrl: '⌃',
  option: '⌥',
  alt: '⎇',
  enter: '↵',
  delete: '⌦',
  backspace: '⌫',
  escape: '⎋',
  tab: '⇥',
  capslock: '⇪',
  arrowup: '↑',
  arrowright: '→',
  arrowdown: '↓',
  arrowleft: '←',
  pageup: '⇞',
  pagedown: '⇟',
  home: '↖',
  end: '↘'
}

export type KbdKey = keyof typeof kbdKeysMap

const _useKbd = () : {
  getKbdKey: (value?: KbdKey | string) => string,
  metaSymbol: Ref<string>,
  macOS: Ref<boolean>
} => {
  const macOS = computed(() => !!(import.meta.client && navigator && navigator.userAgent && navigator.userAgent.match(/Macintosh;/)))

  const metaSymbol = ref(' ')

  onMounted(() => {
    metaSymbol.value = macOS.value ? kbdKeysMap.command : kbdKeysMap.ctrl
  })

  function getKbdKey(value?: KbdKey | string): string {
    if (!value) {
      return ''
    }
    if (value === 'meta') {
      return metaSymbol.value
    }

    return kbdKeysMap[value as KbdKey] || value.toUpperCase()
  }

  return {
    macOS,
    metaSymbol,
    getKbdKey
  }
}

export const useKbd = createSharedComposable(_useKbd)
