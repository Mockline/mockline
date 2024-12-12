import type { MocklineConfig, ModuleOptions } from './module'
import icons from './icons'

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
  toast: {
    position: 'top-center',
  },
  icons,
  components: {}
}
