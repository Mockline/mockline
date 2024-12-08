import type { MocklineConfig, ModuleOptions } from './module'
import icons from './icons'

export const defaultModuleOptions: ModuleOptions = {
  prefix: 'M',
  fonts: true,
  icon: true,
  colorMode: true,
  content: false,
  mdc: false,
  transitions: false,
  components: true,
  composables: true,
}

export const defaultAppConfig: MocklineConfig = {
  colors: {
    primary: 'blue',
    secondary: 'blue',
    danger: 'red',
    warning: 'yellow',
    success: 'green',
    info: 'blue',
    neutral: 'neutral',
  },
  toast: {
    position: 'top-center',
  },
  icons
}
