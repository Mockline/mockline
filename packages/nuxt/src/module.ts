import {
  defineNuxtModule,
  createResolver,
  addImportsDir,
  addComponentsDir,
  installModule,
  addPlugin,
  hasNuxtModule,
} from '@nuxt/kit'
import { defu } from 'defu'
import type { Nuxt } from '@nuxt/schema'
import type { MocklineUtilsModuleOptions } from '@mockline/utils'
import { name, version } from '../package.json'
import { addTemplates } from './templates'
import type { Color } from './runtime/utils/colors'

export type * from './runtime/types'

export type ModuleOptions = {
  /**
   * Prefix for all components
   * @defaultValue 'M'
   */
  prefix?: string,
  /** Enable Nuxt Fonts
   *  @defaultValue true
   */
  fonts?: boolean
  /** Enable Nuxt Icons
   *  @defaultValue true
   */
  icon?: boolean
  /** Enable Nuxt Color Mode
   *  @defaultValue true
   */
  colorMode?: boolean
  /**
   * Enable Nuxt Content
   * @defaultValue false
   */
  content?: boolean
  /**
   * The colors to use
   */
  colors?: Color[]
  /**
   * Enable Color Transitions
   * @defaultValue false
   */
  transitions?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'mockline',
  },
  defaults: {
    prefix: 'M',
    content: false,
    colors: undefined,
    transitions: false,
  },
  async setup(options: ModuleOptions, nuxt: Nuxt): Promise<void> {
    const { resolve } = createResolver(import.meta.url)

    // Transpile runtime
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.options.router.options.scrollBehaviorType = 'smooth'

    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.alias['#mockline'] = resolve('./runtime')

    // @ts-expect-error - Fix this later
    options.colors = options.colors?.length ? [...new Set(['primary', ...options.colors])] : ['primary']

    nuxt.options.mockline = options

    nuxt.options.appConfig.mockline = defu(nuxt.options.appConfig.mockline || {}, {
      colors: {
        primary: 'blue',
        neutral: 'neutral',
      }
    })

    // Isolate root node from portaled components
    nuxt.options.app.rootAttrs = nuxt.options.app.rootAttrs || {}
    nuxt.options.app.rootAttrs.class = [nuxt.options.app.rootAttrs.class, 'isolate'].filter(Boolean).join(' ')

    // Templates
    addTemplates(options, nuxt)

    // Modules
    async function registerModule(name: string, options: Record<string, any>): Promise<void> {
      if (!hasNuxtModule(name)) {
        await installModule(name, options)
      } else {
        (nuxt.options as any)[name] = defu((nuxt.options as any)[name], options)
      }
    }

    const utilsOptions: MocklineUtilsModuleOptions = {
      prefix: options.prefix,
      fonts: options.fonts,
      icon: options.icon,
      colorMode: options.colorMode,
      importComponents: false
    }

    await registerModule('@mockline/utils', utilsOptions)

    addPlugin({ src: resolve(runtimeDir, 'plugins', 'colors') })

    addComponentsDir({
      path: resolve('./runtime/components/elements'),
      prefix: options.prefix,
      pathPrefix: false,
    }).then()

    addComponentsDir({
      path: resolve('./runtime/components/layout'),
      prefix: options.prefix,
      pathPrefix: false,
    }).then()

    addComponentsDir({
      path: resolve('./runtime/components/settings'),
      prefix: options.prefix,
      pathPrefix: false,
    }).then()

    addComponentsDir({
      path: resolve('./runtime/components/overlays'),
      prefix: options.prefix,
      pathPrefix: false,
    }).then()

    if (options.content) {
      await registerModule('@nuxt/content', {
        highlight: {
          theme: {
            dark: 'github-dark',
            default: 'github-light',
            light: 'github-light'
          },
          langs: ['bash', 'ts', 'diff', 'vue', 'json', 'yml', 'css', 'mdc']
        },
      })

      await addComponentsDir({
        path: resolve('./runtime/components/content'),
        prefix: options.prefix,
        pathPrefix: false
      })

      await addComponentsDir({
        path: resolve('./runtime/components/prose'),
        pathPrefix: false,
        global: true
      })
    }

    addImportsDir(resolve('./runtime/composables'))
  },
})
