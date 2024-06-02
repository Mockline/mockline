<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: undefined
  },
  filename: {
    type: String,
    default: undefined
  }
})

type Config = Record<string, string>

const config: Config = {
  'package.json': 'i-vscode-icons-file-type-node',
  'tsconfig.json': 'i-vscode-icons-file-type-tsconfig',
  '.npmrc': 'i-vscode-icons-file-type-npm',
  '.editorconfig': 'i-vscode-icons-file-type-editorconfig',
  '.eslintrc': 'i-vscode-icons-file-type-eslint',
  '.eslintrc.cjs': 'i-vscode-icons-file-type-eslint',
  '.eslintignore': 'i-vscode-icons-file-type-eslint',
  'eslint.config.js': 'i-vscode-icons-file-type-eslint',
  'eslint.config.mjs': 'i-vscode-icons-file-type-eslint',
  'eslint.config.cjs': 'i-vscode-icons-file-type-eslint',
  '.gitignore': 'i-vscode-icons-file-type-git',
  'yarn.lock': 'i-vscode-icons-file-type-yarn',
  '.env': 'i-vscode-icons-file-type-dotenv',
  '.env.example': 'i-vscode-icons-file-type-dotenv',
  '.vscode/settings.json': 'i-vscode-icons-file-type-vscode',
  'nuxt': 'i-vscode-icons-file-type-nuxt',
  '.nuxtrc': 'i-vscode-icons-file-type-nuxt',
  '.nuxtignore': 'i-vscode-icons-file-type-nuxt',
  'nuxt.config.js': 'i-vscode-icons-file-type-nuxt',
  'nuxt.config.ts': 'i-vscode-icons-file-type-nuxt',
  'nuxt.schema.ts': 'i-vscode-icons-file-type-nuxt',
  'tailwind.config.js': 'i-vscode-icons-file-type-tailwind',
  'tailwind.config.ts': 'i-vscode-icons-file-type-tailwind',
  vue: 'i-vscode-icons-file-type-vue',
  ts: 'i-vscode-icons-file-type-typescript',
  tsx: 'i-vscode-icons-file-type-typescript',
  mjs: 'i-vscode-icons-file-type-js',
  cjs: 'i-vscode-icons-file-type-js',
  js: 'i-vscode-icons-file-type-js',
  jsx: 'i-vscode-icons-file-type-js',
  md: 'i-vscode-icons-file-type-markdown',
  py: 'i-vscode-icons-file-type-python',
  ico: 'i-vscode-icons-file-type-favicon',
  npm: 'i-vscode-icons-file-type-npm',
  pnpm: 'i-vscode-icons-file-type-pnpm',
  npx: 'i-vscode-icons-file-type-npm',
  yarn: 'i-vscode-icons-file-type-yarn',
  bun: 'i-vscode-icons-file-type-bun',
  yml: 'i-vscode-icons-file-type-yaml',
  terminal: 'i-heroicons-command-line'
}

const extension = computed(() => (props.filename?.split('.').pop() || '').toLowerCase())

const hasIcon = computed(() => props.icon || config[extension.value] || props.filename?.includes('.'))

const icon = computed(() => {
  if (props.icon) {
    return props.icon
  }

  if (props.filename) {
    // @ts-expect-error - TS doesn't know that the key exists
    return config[props.filename.split('/').pop()] || config[extension.value] || `i-vscode-icons-file-type-${extension.value}`
  }

  return ''
})
</script>

<template>
  <span v-if="hasIcon" :class="icon!.split(' ').pop()" />
</template>
