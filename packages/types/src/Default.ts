import type { MocklineConfig, ModuleOptions } from './Module'
import icons from './Icons'

export const defaultModuleOptions: ModuleOptions = {
  prefix: 'M',
  fonts: true,
  icon: true,
  colorMode: true,
  content: false,
  transitions: false,
  components: true,
  composables: true,
}

export const defaultAppConfig: MocklineConfig = {
  colors: {
    primary: 'blue',
    secondary: 'blue',
    error: 'red',
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
