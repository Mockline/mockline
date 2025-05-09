import icons from './icons'
import type { MocklineConfig, ModuleOptions } from './module'

export const defaultModuleOptions: ModuleOptions = {
  prefix: 'M',
  fonts: true,
  icon: true,
  colorMode: true,
  content: true,
  mdc: true,
  components: true,
  composables: true,
}

export const defaultAppConfig: MocklineConfig = {
  colors: {
    primary: 'blue',
    danger: 'red',
    neutral: 'neutral',
  },
  transitions: true,
  darkCode: true,
  toast: {
    position: 'top-center',
  },
  icons,
  components: {}
}
