import {
  defineNuxtModule,
  createResolver,
  addImportsDir,
  addComponentsDir,
  installModule,
  addPlugin,
  hasNuxtModule,
  addVitePlugin,
  addImportsSources, addTemplate,
} from '@nuxt/kit'
import { defu } from 'defu'
import type { Nuxt } from '@nuxt/schema'
import type { ModuleOptions } from '@mockline/themes'
import { defaultModuleOptions, defaultAppConfig } from '@mockline/themes'
import { name, version } from '../package.json'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'mockline',
    compatibility: {
      nuxt: '>=3.13.1'
    },
  },
  defaults: defaultModuleOptions,
  async setup(options: ModuleOptions, nuxt: Nuxt): Promise<void> {
    const { resolve } = createResolver(import.meta.url)

    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    nuxt.options.router.options.scrollBehaviorType = 'smooth'

    nuxt.options.build.transpile.push(runtimeDir)
    nuxt.options.alias['#mockline'] = resolve('./runtime')

    nuxt.options.mockline = options

    nuxt.options.appConfig.mockline = defu(nuxt.options.appConfig.mockline || {}, defaultAppConfig)

    nuxt.options.app.rootAttrs = nuxt.options.app.rootAttrs || {}
    nuxt.options.app.rootAttrs.class = [nuxt.options.app.rootAttrs.class, 'isolate'].filter(Boolean).join(' ')

    async function registerModule(name: string, options: Record<string, any>): Promise<void> {
      if (!hasNuxtModule(name)) {
        await installModule(name, options)
      } else {
        (nuxt.options as any)[name] = defu((nuxt.options as any)[name], options)
      }
    }

    if (nuxt.options.builder === '@nuxt/vite-builder') {
      const plugin = await import('@tailwindcss/vite').then(r => r.default)
      addVitePlugin(plugin())
    } else {
      nuxt.options.postcss.plugins['@tailwindcss/postcss'] = {}
    }

    if (options.icon) {
      await registerModule('@nuxt/icon', {
        customCollections: [
          {
            prefix: 'custom',
            dir: './app/assets/icons'
          },
        ],
      })
    }

    if (options.fonts)
      await registerModule('@nuxt/fonts', { experimental: { processCSSVariables: true } })

    if (options.colorMode)
      await registerModule('@nuxtjs/color-mode', { classSuffix: '', disableTransition: true, storageKey: 'mockline-color-mode' })

    addImportsSources({
      from: 'vue-sonner',
      imports: ['toast'],
    })

    addPlugin({ src: resolve(runtimeDir, 'plugins', 'colors') })

    if (hasNuxtModule('@nuxtjs/mdc') || (hasNuxtModule('@nuxt/content'))) {
      // @ts-expect-error - Nuxt doesn't have a type for this
      nuxt.options.mdc = defu(nuxt.options.mdc, {
        highlight: {
          theme: {
            dark: 'github-dark',
            default: 'github-light',
            light: 'github-light'
          }
        },
        components: {
          map: {
            'callout': 'ProseCallout',
            'code-group': 'ProseCodeGroup',
            'code-icon': 'ProseCodeIcon',
            'icon': 'ProseIcon',
            'kbd': 'ProseKbd',
            'tabs': 'ProseTabs',
            'danger': 'ProseDanger',
            'note': 'ProseNote',
            'tip': 'ProseTip',
            'warning': 'ProseWarning',
            'img': 'ProseImg',
            'hr': 'ProseHr',
          }
        }
      })
      if (options.mdc) {
        await addComponentsDir({
          path: resolve('./runtime/components/prose'),
          prefix: 'Prose',
          pathPrefix: false,
          global: true
        })
      }
      if (options.content) {
        await addComponentsDir({
          path: resolve('./runtime/components/content'),
          pathPrefix: false,
          prefix: options.prefix,
        })
      }
    }

    if (options.components) {
      await addComponentsDir({
        path: resolve('./runtime/components'),
        prefix: options.prefix,
        pathPrefix: false,
        ignore: ['content/!**', 'prose/!**']
      })
    }

    if (!hasNuxtModule('@nuxt/ui') && options.composables)
      addImportsDir(resolve('./runtime/composables'))

    nuxt.hook('prepare:types', ({ references }) => {
      references.push({ path: resolve('./runtime/types/app.config.d.ts') })
      references.push({ path: resolve('./runtime/types/mockline.d.ts') })
    })

    addTemplate({
      filename: 'mockline-image-component.ts',
      write: true,
      getContents: ({ app }) => {
        const image = app?.components?.find(c => c.pascalName === 'NuxtImg' && !c.filePath.includes('nuxt/dist/app'))

        return image ? `export { default } from "${image.filePath}"` : 'export default "img"'
      }
    })
  },
})
